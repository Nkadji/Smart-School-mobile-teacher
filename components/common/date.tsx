import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

interface DatePickerProps {
  onDateSelect?: (date: Date) => void;
}

const DatePicker = ({ onDateSelect }: DatePickerProps) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

   const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      onDateSelect?.(selectedDate);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR');
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.text}>{formatDate(date)}</Text>
        <MaterialIcons name="event" size={25} color="#666" />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChange}
          minimumDate={minDate}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cacacaff',
    borderRadius: 10,
    width: 280,
    height: 45,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    //backgroundColor: '#f9f9f9',
  },
  text: {
    color: '#666',
    fontSize: 16,
  },
});

export default DatePicker;