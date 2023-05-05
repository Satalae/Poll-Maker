module.exports = {
    createChart: function (elementId, option1Votes, option2Votes) {
        return `createChart('${elementId}', ${option1Votes}, ${option2Votes});`;
    },

    // add other helper functions if needed
};
