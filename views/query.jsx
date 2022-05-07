const React = require('react')
const Def = require('./templates/default')

const query = (data) => {
    return (
        <Def>
            <main>
                <h1>
                    The page you are looking for does not exist!
                </h1>
            </main>
        </Def>
    )
}

module.exports = query