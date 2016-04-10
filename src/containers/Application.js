import React, { Component, PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

class Application extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

Application.propTypes = {
  children: PropTypes.object
};

export default Application;
