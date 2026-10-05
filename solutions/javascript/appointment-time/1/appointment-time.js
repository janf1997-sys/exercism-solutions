// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
  const appointment = new Date(now);
  appointment.setDate(appointment.getDate() + days)
  return appointment
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  const stamp = appointmentDate.toISOString();
  return stamp
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  timestamp = new Date(timestamp)
  const appointment = {
    year: timestamp.getFullYear(),
    month: timestamp.getMonth(),
    date: timestamp.getDate(),
    hour: timestamp.getHours(),
    minute: timestamp.getMinutes()
  }
  return appointment
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  
  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  if (options.month !== undefined) {
    date.setMonth(options.month);
  }


  if (options.date !== undefined) {
    date.setDate(options.date);
  }

 
  if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}
  


/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);
  if (dateA < dateB) {
    return Math.round((dateB - dateA) / 1000)
  }
  else {
    return Math.round((dateA - dateB) / 1000)
  }
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointment = new Date(appointmentTimestamp);
  const current = new Date(currentTimestamp);
  return appointmentTimestamp > currentTimestamp
}
