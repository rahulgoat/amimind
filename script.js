document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    uploadFile(file);
  } else {
    alert('Please select a PDF file to upload.');
  }
});

function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  axios.post('https://api.vectara.io/v1/upload?c=2461984701&o=6', formData, {
    headers: { 
      'Content-Type': 'multipart/form-data', 
      'Accept': 'application/json', 
      'x-api-key': 'sk-proj-1I0FMo35Kf0VoIWaZr7UT3BlbkFJv5aTz43HQVibgpaAdZqz'
    }
  })
  .then((response) => {
    console.log(response.data);
    alert('File uploaded successfully!');
  })
  .catch((error) => {
    console.error(error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      alert('An error occurred while uploading the file. Please check the console for more details.');
    } else {
      alert('An error occurred while uploading the file. Please check your network connection and try again.');
    }
  });
}
