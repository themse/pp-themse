import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Nav } from '../../nav';

type HeaderProps = {
  auth: any;
};

export const Header: React.FC<HeaderProps> = ({ auth }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Grid container justify="space-between" alignItems="center">
              <h1>
                <Link href="/">
                  <a>Themse</a>
                </Link>
              </h1>
              <Nav auth={auth} />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
