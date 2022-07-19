import { Typography } from '@mui/material';

function App() {
  return (

    <Typography variant='h2' component='h2' data-test='heading'>
      Bookish
       <div data-test='book-list'>
        <div className='book-item'>
        </div>
        <div className='book-item'>
        </div>
      </div>
    </Typography>


   
  );
}

export default App;
