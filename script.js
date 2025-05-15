document.addEventListener('DOMContentLoaded', function() {
    const tweetButton = document.getElementById('tweet-button');
    const tweetText = document.getElementById('tweet-text');
    const tweetsContainer = document.getElementById('tweets');

    tweetButton.addEventListener('click', function() {
        const tweetContent = tweetText.value.trim();

        if (tweetContent !== '') {
            const tweetDiv = document.createElement('div');
            tweetDiv.classList.add('tweet');
            tweetDiv.innerHTML = '<p>' + tweetContent + '</p>';

            tweetsContainer.prepend(tweetDiv);
            tweetText.value = '';
        }
    });
});