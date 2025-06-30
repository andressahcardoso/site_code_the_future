   function redirecionarInscricao() {
      window.location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=eLMrX52SH0OIdP6D40vsiborjADzxvRGmwWKsn-mEdxUNEJPTlpLTjVRVkVSWVQ0Tk8xVDVDMVM5Si4u";
    }

   function download() {
    const link = document.createElement('a');
      link.href = 'arquivo.pdf'; // coloque a URL da imagem aqui
      link.download = 'Fourmulário.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }