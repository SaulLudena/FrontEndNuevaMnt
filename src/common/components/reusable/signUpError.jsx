import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

export default function SignUpError({ statusError, apiMessage }) {
  if (statusError) {
    return (
      <div className={`flex justify-center absolute py-14 w-full z-20`}>
        <div>
          <Stack sx={{ width: '30rem' }} className="shadow-lg">
            <Alert severity="error">
              <AlertTitle>Oh no !</AlertTitle>
              Algo ha pasado — <strong>{apiMessage}</strong>
            </Alert>
          </Stack>
        </div>
      </div>
    )
  }
}
