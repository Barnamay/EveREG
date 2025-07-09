

const formatTime = (timeValue) => {
  if (!timeValue) return 'Time not available';

  try {
    // If it's already a string like "02:30 PM" or "14:30"
    if (typeof timeValue === 'string') {
      const date = new Date(`1970-01-01T${timeValue}`);
      if (isNaN(date)) return timeValue; // fallback to raw string
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    }

    // If it's a Date object or DateTime string
    const date = new Date(timeValue);
    if (isNaN(date)) return 'Invalid time';

    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch (err) {
    return 'Time not available';
  }
}
