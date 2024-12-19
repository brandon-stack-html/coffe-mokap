// pages/Contact.tsx
import React, { useState } from 'react';
import { MainLayout } from '../components/templates/mainLayout';
import { Text } from '../components/atoms/text';
import { Input } from '../components/atoms/input';
import { Button } from '../components/atoms/button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación básica
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);

    // Si no hay errores, enviar el formulario
    if (!Object.values(newErrors).some(error => error)) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      // Resetear el formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Text variant="h1" className="text-center mb-8">
            Contáctanos
          </Text>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <Text variant="body" className="text-gray-600 mb-6 text-center">
              ¿Tienes alguna pregunta o comentario? Nos encantaría escucharte.
            </Text>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nombre"
                type="text"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Tu nombre"
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="tu@email.com"
              />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="¿En qué podemos ayudarte?"
                />
                {errors.message && (
                  <span className="text-sm text-red-500">{errors.message}</span>
                )}
              </div>

              <Button
                variant="primary"
                size="large"
                className="w-full"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <Text variant="h4" className="mb-2">Teléfono</Text>
              <Text variant="body" className="text-gray-600">
                (123) 456-7890
              </Text>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <Text variant="h4" className="mb-2">Email</Text>
              <Text variant="body" className="text-gray-600">
                info@cafedelight.com
              </Text>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <Text variant="h4" className="mb-2">Dirección</Text>
              <Text variant="body" className="text-gray-600">
                Calle Principal #123<br />
                Ciudad, País
              </Text>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};