import React from "react";
import moment from "moment";

class Articles {
    state = {
        articles: [],
        end: "",
        topic: "",
        begin: "",
        delete: "";
    };

    loadSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
                this.setState({
                    articles: res.data,
                    topic: "",
                    title: "",
                    date: "",
                    URL: ""
                })
            );
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        return this.handleInputChange();
    };
    save = articleData => {
        document.getElementById(articleData);
        api(articleData);
    };

    

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.begin = "")
            alert("start date");
        else if (this.state.end = "")
            alert("end date");
        else
        {
            console.log('queryURL', queryURL)
                response => {
                    console.log("this is response", response.data.response.docs);
                    const statusStr = "Found " + response.data.response.docs.length + " Articles";
                    const topicResult = "about " + this.state.topic;
                    this.setState({
                        newArticles: response.data.response.docs,
                        topic: "",
                        begin: "",
                        end: "",
                        status: statusStr,
                        foundTopic: topicResult
                    });
        }    

    };

    render()
    <Col size="med-6">
        <div>
            <h1>Articles </h1>{" "}
            {this.state.articles.length (
                <UL>
                    {" "}
                    {this.(article => (
                        <li key={article._id}>
                                <h4>
                                    {this(article.date)("mmm Do yy")}{" - "}
                                </h4>
                            </Link>{" "};
                        </li>
                    ))}
                </UL>
            ) : (
                <h3> No Results to Display </h3>
            )}{" "}
        </div>
    </Col>
</Container>
        );
    }
}

export default Articles;