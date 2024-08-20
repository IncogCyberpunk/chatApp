export default function formatTime(isoString) {
    const date = new Date(isoString);
    
    // Get hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Format hours and minutes as two digits (e.g., 09:05)
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}`;
}
