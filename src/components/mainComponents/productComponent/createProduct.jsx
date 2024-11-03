// import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CreateProduct = () => {
  // Initial values
  const initialValues = {
    name: '',
    variety: '',
    type: '',
    color: '',
    location: '',
    spicyLevel: '',
    dateOfEntry: '',
    availableToDate: '',
    dealers: '',
    description: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    variety: Yup.string().required('Variety is required'),
    type: Yup.string().required('Type is required'),
    color: Yup.string().required('Color is required'),
    location: Yup.string().required('Location is required'),
    spicyLevel: Yup.number()
      .min(1, 'Minimum spicy level is 1')
      .max(10, 'Maximum spicy level is 10')
      .required('Spicy level is required'),
    dateOfEntry: Yup.date().required('Date of entry is required'),
    availableToDate: Yup.date().required('Available up to date is required'),
    dealers: Yup.string().required('Dealers information is required'),
    description: Yup.string().min(10, 'Description should be at least 10 characters long'),
  });

  // Submit handler
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/api/products', values); // Replace with actual endpoint
      console.log('Product created:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-2/3 h-2/3 mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Create New Product</h2>
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <Field name="name" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Variety */}
            <div>
              <label className="block text-gray-700">Variety</label>
              <Field name="variety" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="variety" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Type */}
            <div>
              <label className="block text-gray-700">Type</label>
              <Field name="type" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="type" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Color */}
            <div>
              <label className="block text-gray-700">Color</label>
              <Field name="color" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="color" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700">Location</label>
              <Field name="location" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="location" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Spicy Level */}
            <div>
              <label className="block text-gray-700">Spicy Level (1-10)</label>
              <Field name="spicyLevel" type="number" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="spicyLevel" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Date of Entry */}
            <div>
              <label className="block text-gray-700">Date of Entry</label>
              <Field name="dateOfEntry" type="date" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="dateOfEntry" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Available To Date */}
            <div>
              <label className="block text-gray-700">Available Up To Date</label>
              <Field name="availableToDate" type="date" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="availableToDate" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Dealers */}
            <div>
              <label className="block text-gray-700">Dealers</label>
              <Field name="dealers" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="dealers" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700">Description</label>
              <Field name="description" as="textarea" rows="4" className="w-full p-2 border border-gray-300 rounded" />
              <ErrorMessage name="description" component="div" className="text-red-600 text-sm" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full p-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Product'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;
