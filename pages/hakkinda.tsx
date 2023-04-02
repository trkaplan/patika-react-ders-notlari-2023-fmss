import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Hakkında - Patika React Practicum Ders Notları 2023',
      }}
    >
      <h1>Hakkında</h1>
      <p>Bu site Patika  <a target="_blank" rel="noreferrer" href="https://www.patika.dev/bootcamp/fmss-bilisim-front-end-practicum">FMSS React Practicum Mart 2023</a> grubu öğrencileri için kursu destekleyici amaçla hazırlanmıştır.</p>
      <p>Patika&apos;nın <a target="_blank" rel="noreferrer" href="https://app.patika.dev/paths/orta-seviye-frontend-web-development-patikasi">Orta Seviye Frontend Web Development Patikası</a> altındaki <a href='https://app.patika.dev/courses/react'>React dersi</a> takip edilmiştir. </p>
      
      <p>Kullanılan kod örneklerine <a href="https://github.com/trkaplan/patika-react-ders-notlari-2023-fmss-code-samples">şu repodan</a> ulaşabilirsiniz:</p>
      <p>Eğitmen: Tuncay Kaplan</p>
      <div>
        <a href="https://github.com/trkaplan" target="_blank" rel="noreferrer" className="block mb-2">
          <img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" />
        </a>
        <a href="https://twitter.com/trkaplan" target="_blank" rel="noreferrer" className="block mb-2">
          <img src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" />
        </a>
        <a href="https://dev.to/trkaplan" target="_blank" rel="noreferrer" className="block mb-2">
          <img src="https://img.shields.io/badge/dev.to-%2308090A.svg?&style=for-the-badge&logo=dev.to&logoColor=white" alt="devto" />
        </a>
        <a href="https://linkedin.com/in/trkaplan" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" />
        </a>
      </div>
    </Layout>
  );
};

export default About;
