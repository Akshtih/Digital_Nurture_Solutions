import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    return (
        <div className={styles.box}>

            <h3
                style={{
                    color:
                        props.cohort.status === "Ongoing"
                            ? "green"
                            : "blue"
                }}
            >
                {props.cohort.title}
            </h3>

            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>

                <dt>Current Status</dt>
                <dd>{props.cohort.status}</dd>

                <dt>Coach</dt>
                <dd>{props.cohort.coach}</dd>

                <dt>Trainer</dt>
                <dd>{props.cohort.trainer}</dd>
            </dl>

        </div>
    );
}

export default CohortDetails;