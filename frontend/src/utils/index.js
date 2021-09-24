/**
 * This function enable auto scroll to bottom
 * But not scroll if user digging to history message
 * @param {*} containerEl 
 * @returns 
 */
export const autoScroll = (containerEl) => {
    // New message element
    const lastEl = containerEl.lastElementChild;
    if(!lastEl) return;
    // Height of last message
    const lastElStyle = getComputedStyle(lastEl);
    const lastElMargin = parseInt(lastElStyle.marginBottom);
    const lastElHeight = lastEl.offsetHeight + lastElMargin;
    // Visible height
    const visibleHeight = containerEl.offsetHeight;
    //Height of container
    const containerHeight = containerEl.scrollHeight;
    //How far have I scroll
    const scrollOffset = containerEl.scrollTop + visibleHeight;

    if(containerHeight - lastElHeight * 1.5 <= scrollOffset) {
        containerEl.scrollTop = containerEl.scrollHeight;
    }
}