const React = require('react')

const Def = (html) => {
    return (
        <html>
            <head>
                <title>
                    {html.title || 'Contacts'}
                </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def