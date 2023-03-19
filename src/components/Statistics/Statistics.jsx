import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <section title="statistics">
            <h2>Statistics</h2>
            
            {total === 0 ? (
                <p>There is no feedback</p>
            ) : (
                <ul>
                    <li>
                        Good: {good}
                    </li>
                    <li>
                        Neutral: {neutral}
                    </li>
                    <li>
                        Bad: {bad}
                    </li>
                    <li>
                        Total: {total}
                    </li>
                    <li>
                        Positive feedback: {positivePercentage}%
                    </li>
                </ul>)}
        </section>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};