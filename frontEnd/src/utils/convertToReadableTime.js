export default function formatTime(isoString) {
    const date = new Date(isoString);
    console.log("date object",date)
    
    // Get hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Format hours and minutes as two digits (e.g., 09:05)
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}`;
}

const isoString = '2024-08-19T13:20:27';
const time = formatTime(isoString);
console.log(time);  // Output: "13:20"
