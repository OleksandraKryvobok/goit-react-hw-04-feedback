import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List, Item, Button } from './FeedbackOptions.styled';

const types = ['good', 'neutral', 'bad'];

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <section title="feedbackOptions">
            <h2>
                Please leave feedback
            </h2>

            <List>
                {types.map(type => {
                    return (
                        <Item key={nanoid()}>
                            <Button type="button" onClick={() => onLeaveFeedback(type)}>{type}</Button>
                        </Item>
                )})}
            </List>
        </section>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};