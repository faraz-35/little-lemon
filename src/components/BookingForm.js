import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Booking.css";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(""); // Update the initial value to an empty string
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [guestError, setGuestError] = useState("");
  const [occasionError, setOccasionError] = useState(""); // New state variable for occasion validation error
  const navigate = useNavigate();
  const availableTimes = props.availableTimes;

  const validateDate = (selectedDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate >= today) {
      setDateError("");
      return true;
    } else {
      setDateError("Please choose a date that is today or in the future.");
      return false;
    }
  };

  const validateTime = (selectedTime) => {
    const now = new Date();
    const selectedTimeParts = selectedTime.split(":");
    const selectedDateTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      selectedTimeParts[0],
      selectedTimeParts[1]
    );

    if (selectedDateTime > now) {
      setTimeError("");
      return true;
    } else {
      setTimeError("Please choose a time that is in the future.");
      return false;
    }
  };

  const validateGuests = (numGuests) => {
    if (numGuests >= 1) {
      setGuestError("");
      return true;
    } else {
      setGuestError("Minimum of 1 guest must be selected.");
      return false;
    }
  };

  const validateOccasion = (selectedOccasion) => {
    if (selectedOccasion !== "") {
      setOccasionError(""); // Reset the occasion error message
      return true;
    } else {
      setOccasionError("Please select an occasion.");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(date);

    const dateIsValid = validateDate(selectedDate);
    const timeIsValid = validateTime(time);
    const guestsIsValid = validateGuests(guests);
    const occasionIsValid = validateOccasion(occasion);

    if (dateIsValid && timeIsValid && guestsIsValid && occasionIsValid) {
      navigate("/ConfirmedBooking");
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const isFormValid = date && time && guests && occasion;

  return (
    <div className="reservation-container">
      <form onSubmit={handleSubmit} className="reservation-form">
        <h1>Reserve a table</h1>

        <label htmlFor="res-date">Choose a date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          pattern="\d{4}-\d{2}-\d{2}"
          aria-label="On Click"
        />
        {dateError && (
          <div className="error-text" data-testid="date-error">
            {dateError}
          </div>
        )}

        <label htmlFor="res-time">Choose a time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {availableTimes.map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        {timeError && <div className="error-text">{timeError}</div>}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          aria-label="On Click"
        />
        {guestError && <div className="error-text">{guestError}</div>}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {occasionError && <div className="error-text">{occasionError}</div>}

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
}

export default BookingForm;
