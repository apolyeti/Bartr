import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AcUnitOutlined } from '@mui/icons-material';

export default function Page({ params }: { params: { user: string } }) {
    return (
      <Stack>
        <div>UserId: {params.user}</div>
        <AccountCircleIcon/>
      </Stack>
    ); 
}