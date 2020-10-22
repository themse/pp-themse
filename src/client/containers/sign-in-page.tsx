import React from 'react';
import { Avatar, Stack, Box } from '@chakra-ui/core';

import { BasicLayout } from '@/client/components/layouts/basic';
import { IAuth } from '@/common/types';
import { useAuth } from '@/common/auth';

export const SignInPage: React.FC = () => {
  const auth: Partial<IAuth> = useAuth(); // TODO

  const authButton = auth?.user ? (
    <a role="button" onClick={() => auth.signOut()}>
      Sign Out
    </a>
  ) : (
    <a role="button" onClick={() => auth?.signInWithGithub()}>
      Sign In
    </a>
  );

  return (
    <BasicLayout title="Sign In">
      <Box style={{ marginTop: '100px' }}>
        {auth?.user && (
          <Stack isInline>
            <span>
              Hello, <b>{auth.user.name}</b>
            </span>
            <Avatar
              ml={2}
              size="xs"
              name={auth.user.name}
              src={auth.user.photo}
            />
          </Stack>
        )}
        {authButton}
      </Box>
    </BasicLayout>
  );
};
