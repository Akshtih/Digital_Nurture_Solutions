import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import {

    books,

    blogs,

    courses

} from "./Data";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="container">

            {

                showCourses &&

                <div className="section">

                    <CourseDetails

                        courses={courses}

                    />

                </div>

            }

            {

                showBooks ?

                <div className="section">

                    <BookDetails

                        books={books}

                    />

                </div>

                :

                null

            }

            {

                showBlogs ?

                <div className="section">

                    <BlogDetails

                        blogs={blogs}

                    />

                </div>

                :

                null

            }

        </div>

    );

}

export default App;