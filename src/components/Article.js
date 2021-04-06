import React from "react";

function Article({title, date="Janyary 1, 1970", preview}) {
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
}
export default Article