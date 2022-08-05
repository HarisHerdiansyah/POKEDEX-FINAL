import React from 'react';
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ErrorInfo from '../../Components/Error Info/ErrorInfo';

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", margin: "100px 0" }}>
      <Title>Ups, Halaman tidak ditemukan</Title>
      <ErrorInfo />
      <Paragraph>Terjadi kesalahan URL dan cek koneksi internet!</Paragraph>
    </div>
  )
}

export default ErrorPage;