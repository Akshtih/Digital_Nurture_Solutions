-- PL/SQL Exercises: Control Structures and Stored Procedures

DROP TABLE Customers CASCADE CONSTRAINTS;
DROP TABLE Accounts  CASCADE CONSTRAINTS;
DROP TABLE Loans     CASCADE CONSTRAINTS;
DROP TABLE Employees CASCADE CONSTRAINTS;

CREATE TABLE Customers (
    CustomerID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(100),
    DOB          DATE,
    Balance      NUMBER,
    IsVIP        NUMBER(1) DEFAULT 0,
    LastModified DATE
);

CREATE TABLE Accounts (
    AccountID    NUMBER PRIMARY KEY,
    CustomerID   NUMBER,
    AccountType  VARCHAR2(20),
    Balance      NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Loans (
    LoanID        NUMBER PRIMARY KEY,
    CustomerID    NUMBER,
    LoanAmount    NUMBER,
    InterestRate  NUMBER,
    StartDate     DATE,
    EndDate       DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(100),
    Position     VARCHAR2(50),
    Salary       NUMBER,
    Department   VARCHAR2(50),
    HireDate     DATE
);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP, LastModified)
VALUES (1, 'John Doe',  TO_DATE('1960-01-15', 'YYYY-MM-DD'),   500,  0, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 15000, 0, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP, LastModified)
VALUES (3, 'Bob Senior', TO_DATE('1955-03-10', 'YYYY-MM-DD'),   200,  0, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings',  1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Savings',  1500, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (3, 1, 'Checking',  500, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 8.0, SYSDATE, ADD_MONTHS(SYSDATE, 60));

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (2, 3, 2000, 7.5, SYSDATE, ADD_MONTHS(SYSDATE, 24));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager',   70000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown',    'Developer', 60000, 'IT', TO_DATE('2017-03-20', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (3, 'Carol White',  'Tester',    50000, 'IT', TO_DATE('2019-09-01', 'YYYY-MM-DD'));

COMMIT;


-- Exercise 1, Scenario 1: 1% discount on loan interest for customers above 60

SET SERVEROUTPUT ON
DECLARE
    v_age   NUMBER;
BEGIN
    FOR loan_rec IN (SELECT l.LoanID, c.DOB
                     FROM Loans l
                     JOIN Customers c ON l.CustomerID = c.CustomerID)
    LOOP
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, loan_rec.DOB) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = loan_rec.LoanID;

            DBMS_OUTPUT.PUT_LINE('Applied 1% discount to loan '
                || loan_rec.LoanID || ' (age ' || v_age || ')');
        END IF;
    END LOOP;
    COMMIT;
END;
/

SELECT LoanID, InterestRate FROM Loans;


-- Exercise 1, Scenario 2: Set IsVIP for customers with balance over 10,000

SET SERVEROUTPUT ON
DECLARE
    v_threshold NUMBER := 10000;
BEGIN
    FOR cust_rec IN (SELECT CustomerID, Name, Balance FROM Customers)
    LOOP
        IF cust_rec.Balance > v_threshold THEN
            UPDATE Customers SET IsVIP = 1 WHERE CustomerID = cust_rec.CustomerID;
            DBMS_OUTPUT.PUT_LINE(cust_rec.Name || ' promoted to VIP.');
        ELSE
            UPDATE Customers SET IsVIP = 0 WHERE CustomerID = cust_rec.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

SELECT CustomerID, Name, Balance, IsVIP FROM Customers;


-- Exercise 1, Scenario 3: Reminders for loans due in the next 30 days

SET SERVEROUTPUT ON
DECLARE
    CURSOR c_loans_due IS
        SELECT l.LoanID, l.EndDate, c.Name, c.CustomerID
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan_rec IN c_loans_due LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: customer '
            || loan_rec.Name || ' (ID ' || loan_rec.CustomerID
            || ') has loan ' || loan_rec.LoanID
            || ' due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/


-- Exercise 3, Scenario 1: ProcessMonthlyInterest - apply 1% interest to savings accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance      = Balance + (Balance * 0.01),
        LastModified = SYSDATE
    WHERE AccountType = 'Savings';
    COMMIT;
END ProcessMonthlyInterest;
/

CALL ProcessMonthlyInterest();
SELECT AccountID, AccountType, Balance FROM Accounts WHERE AccountType = 'Savings';


-- Exercise 3, Scenario 2: UpdateEmployeeBonus - add a bonus percentage by department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_pct  IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_pct / 100)
    WHERE Department = p_department;
    COMMIT;
END UpdateEmployeeBonus;
/

CALL UpdateEmployeeBonus('IT', 10);
SELECT EmployeeID, Name, Department, Salary FROM Employees WHERE Department = 'IT';


-- Exercise 3, Scenario 3: TransferFunds - check balance and transfer

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_source_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: insufficient funds.');
        RETURN;
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount, LastModified = SYSDATE
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount, LastModified = SYSDATE
    WHERE AccountID = p_to_account;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount
        || ' from account ' || p_from_account
        || ' to account ' || p_to_account);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: account not found.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
        ROLLBACK;
END TransferFunds;
/

CALL TransferFunds(1, 3, 200);
SELECT AccountID, Balance FROM Accounts WHERE AccountID IN (1, 3);
