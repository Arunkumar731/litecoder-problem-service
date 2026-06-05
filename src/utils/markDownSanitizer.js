const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markDownContent){

    const turndownService = new TurndownService();

    // convert markdown to html
    const convertedHtml = marked.parse(markDownContent);
    console.log(convertedHtml);

    // sanitizeHtml 
    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });
    console.log(sanitizedHtml);

    // return sanitizedHtml;
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log(sanitizedMarkdown);

    return sanitizedMarkdown;
}

const input = `
# Hello world 
### this is a markDown
- something 
<script>alert("wahoo")</script>
[Link](www.google.com)
`;

sanitizeMarkdown(input);

module.exports = sanitizeMarkdown;