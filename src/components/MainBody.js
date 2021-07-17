import React from 'react';
import '../css/mainbody.css';
import img1 from '../img/undraw_static_assets_rpm6.svg';
import ComparisionSlider1 from './ComparisionSlider';
import 'font-awesome/css/font-awesome.min.css';
import Resume from './Resume/Resume';
class MainBody extends React.Component {
  render() {
    return (
      <div className='container-fluid pl-0 pr-0 bg-white'>
        <div className='row intro-container'>
          <div className='col-lg-5 offset-lg-1 d-flex align-items-end'>
            <img src={img1} style={{ width: '90%', height: '90%' }}></img>
          </div>
          <div className='intro-box col-lg-6 '>
            <ComparisionSlider1 />
          </div>
        </div>

        <div className='row box box2'>
          <Resume />
        </div>
        <div className='row box d-none'>
          <div className='col-lg-5  box3'></div>
          <div className='col-lg-7 box4'></div>
        </div>
        <div className='row box d-none'>
          <div className='col-lg-5  box5'></div>
          <div className='col-lg-7 box6'></div>
        </div>
        <div className='row box d-none'>
          <div className='col-lg-5  box7'></div>
          <div className='col-lg-7 box8'></div>
        </div>
        <div className='row box d-none'>
          <div className='col-lg-5  box9'></div>
          <div className='col-lg-7 box10'></div>
        </div>
        <div className='row box d-none'>
          <div className='col-lg-5  box13'></div>
          <div className='col-lg-7 box14'></div>
        </div>
        <div className='row box d-none'>
          <div className='col-lg-5  box11'></div>
          <div className='col-lg-7 box12'></div>
        </div>
        <div className='container bg-white footer'>
          <footer>
            <i className='makeGreen pr-3'>Designed by</i>{' '}
            <i>
              Kuldeep Joshi with &nbsp;
              <i class='fa fa-heart '></i>
            </i>
          </footer>
        </div>
      </div>
    );
  }
}
export default MainBody;
