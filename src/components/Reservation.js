import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  tableFor: Yup.number()
    .typeError("Table for must be a number")
    .required("Table for is required")
    .integer("Table for must be an integer")
    .min(1, "Table for must be at least 1"),
});

const ReservationForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box
      width="100%"
      bg="#495E57"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="30px"
      padding="10px"
      id="reservation-section"
    >
      <Heading as="h2" size="2xl" color="#F4CE14">
        Reserve a Table
      </Heading>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          date: "",
          time: "",
          tableFor: 1,
          specialRequests: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Responsible Details */}
            <Box
              display="flex"
              alignItems="flex-start"
              gap="10px"
              color="white"
            >
              <VStack
                display="flex"
                alignItems="flex-start"
                border="1px solid #EDEFEE"
                borderRadius="10px"
                padding="10px"
              >
                <Heading as="h3" size="lg" color="white">
                  Responsible Details
                </Heading>
                <Text>First Name*</Text>
                <Field
                  type="text"
                  name="firstName"
                  as={Input}
                  placeholder="First Name"
                  size="md"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  style={{ color: "red" }}
                />
                <Text>Last Name*</Text>
                <Field
                  type="text"
                  name="lastName"
                  as={Input}
                  placeholder="Last Name"
                  size="md"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  style={{ color: "red" }}
                />
                <Text>E-mail*</Text>
                <Field
                  type="text"
                  name="email"
                  as={Input}
                  placeholder="E-mail"
                  size="md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
                <Text>Phone Number*</Text>
                <Field
                  type="tel"
                  name="phoneNumber"
                  as={Input}
                  placeholder="Phone Number"
                  size="md"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  style={{ color: "red" }}
                />
              </VStack>

              {/* Reservation Details */}
              <VStack
                display="flex"
                alignItems="flex-start"
                border="1px solid #EDEFEE"
                borderRadius="10px"
                padding="10px"
              >
                <Heading as="h2" size="lg" color="white">
                  Reservation Details
                </Heading>
                <Text>Date*</Text>
                <Field
                  type="date"
                  name="date"
                  as={Input}
                  placeholder="Date"
                  size="md"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  style={{ color: "red" }}
                />
                <Text>Time*</Text>
                <Field
                  type="time"
                  name="time"
                  as={Input}
                  placeholder="Time"
                  size="md"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  style={{ color: "red" }}
                />
                <Text>Table for*</Text>
                <Field
                  type="number"
                  name="tableFor"
                  as={Input}
                  placeholder="Table for"
                  size="md"
                />
                <ErrorMessage
                  name="tableFor"
                  component="div"
                  style={{ color: "red" }}
                />
                <Text>Special Requests (optional)</Text>
                <Field
                  type="text"
                  name="specialRequests"
                  as={Textarea}
                  placeholder="Special Requests (optional)"
                />
              </VStack>
            </Box>
            <HStack display={"flex"} justifyContent="center" mt={6}>
              <Button type="submit" bg="#F4CE14" isDisabled={isSubmitting}>
                Confirm Reservation
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ReservationForm;
