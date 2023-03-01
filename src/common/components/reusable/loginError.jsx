import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

export default function LoginError({ statusError, apiMessage }) {
  if (statusError) {
    return (
      <div className=" flex justify-center absolute py-14 w-full z-20">
        <Stack className="shadow-lg w-[30rem]">
          <Alert severity="error" className="rounded-full">
            <AlertTitle>Oh no !</AlertTitle>
            Algo ha pasado — <strong>{apiMessage}</strong>
          </Alert>
        </Stack>
      </div>
    )
  }
}
