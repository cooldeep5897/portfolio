import React from 'react';
import ComparisonSlider from 'comparison-slider';
import '../css/slider.css';
import 'bootstrap/dist/css/bootstrap.css';
class ComparisonSlide extends React.Component {
  componentDidMount() {
    var comparisonSlider = new ComparisonSlider();
  }
  render() {
    return (
      <div class='ComparisonSlider '>
        <div class='ComparisonSlider__Before '>
          <div className='about-me p-4 '>
            <div className='row p-5 pt-md-4 noselect '>
              <div></div>
              <div>
                <div className='fl-heading' style={{}}>
                  Kuldeep Joshi
                </div>
                <p className='t-w'>
                  Competitive Coder | Full Stack Developer 
                </p>
                <p className='tc'>Summary</p>
                <p className='c-g'>
                  Completed B.Tech in Computer Science from  Graphic Era Hill University, Bhimtal
                  , I consider myself to be creative, hard-working and
                  a tech enthusiast. I believe in practical work rather than
                  theoretical . I am good at portal development using
                  React. Apart from that I have a interest in Backend developement using NodeJs as well.
                  I can adapt easily and believe me , I am a quick learner.
                </p>
                <p className='tc'>Education</p>
                <p className='c-g'>
                  <table>
                    <tr>
                      <td>University &nbsp;</td>
                      <td>: Graphic Era Hill University 2016-2020</td>
                    </tr>
                    <tr>
                      <td>Stream </td>
                      <td>: B.Tech CSE</td>
                    </tr>
                    <tr>
                      <td> Intermediate </td>
                      <td>: Kendriya Vidyalaya Haldwani Cantt</td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='ComparisonSlider__After text-dark text-white'>
          <div className='about-me p-4 '>
            <div className='row p-5 pt-md-4 noselect '>
              <div></div>
              <div>
                <div className='fl-heading' style={{}}>
                  Kuldeep Joshi
                </div>
                <p className='t-w'>
                  Competitive Coder | Full Stack Developer 
                </p>
                <p className='tc'>TECHNICAL SKills</p>
                <p className=''>
                  <table className='ts-table'>
                    <tr>
                      <td>React Js &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '75%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Java &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '90%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Competetive Coding &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '72%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> NodeJs &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '75%' }}></div>
                        </div>
                      </td>
                    </tr>
                   
                    <tr>
                      <td>JavaScript &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '50%' }}></div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>C/C++ &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '62%' }}></div>
                        </div>
                      </td>
                    </tr>
                   
                    <tr>
                      <td>HTML / CSS3 &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '95%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>MongoDB &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '88%' }}></div>
                        </div>
                      </td>
                    </tr>
                
                    <tr>
                      <td> Selenium &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '80%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Katalon &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '80%' }}></div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td> Mysql &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '88%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> UI Designing &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '90%' }}></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ComparisonSlide;
