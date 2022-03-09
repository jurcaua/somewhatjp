import { keyframes } from "@mui/system";

export const bounce = keyframes`
    0%   { transform: scale(1,1);      }
    10%  { transform: scale(1.1,.9);   }
    30%  { transform: scale(.9,1.1);   }
    50%  { transform: scale(1.05,.95); }
    57%  { transform: scale(1,1);      }
    64%  { transform: scale(1,1);      }
    100% { transform: scale(1,1);      }
`;
