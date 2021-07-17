import React, { Component } from 'react';

export default class TechnicalSkills extends Component {
  render() {
    return (
      <table className='ts-table  font'>
        <tr>
          <td>JAVA &nbsp;</td>
        </tr>
        <tr>
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
          <td>React js &nbsp; </td>
        </tr>
        <tr>
          <div class='progress'>
            <div
              class='progress-bar progress-bar-warning progress-bar-striped'
              role='progressbar'
              aria-valuenow='40'
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '86%' }}></div>
          </div>
        </tr>
        <tr>
          <td>NodeJs &nbsp;</td>
        </tr>
        <tr>
          <td>
            <div class='progress'>
              <div
                class='progress-bar progress-bar-warning progress-bar-striped'
                role='progressbar'
                aria-valuenow='40'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: '86%' }}></div>
            </div>
          </td>
        </tr>
        <tr>
          {' '}
          <td>Data Structure-Algorithms &nbsp;</td>
        </tr>
        <tr>
          <div class='progress'>
            <div
              class='progress-bar progress-bar-warning progress-bar-striped'
              role='progressbar'
              aria-valuenow='40'
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '82%' }}></div>
          </div>
        </tr>
        <tr>
          <td>C/C++ &nbsp; </td>
        </tr>
        <tr>
          <div class='progress'>
            <div
              class='progress-bar progress-bar-warning progress-bar-striped'
              role='progressbar'
              aria-valuenow='40'
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '72%' }}></div>
          </div>
        </tr>
        <tr>
          <td>Web development &nbsp;</td>
        </tr>
        <tr>
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
          <td>UI/UX designing &nbsp; </td>
        </tr>
        <tr>
          <td>
            <div class='progress'>
              <div
                class='progress-bar progress-bar-warning progress-bar-striped'
                role='progressbar'
                aria-valuenow='40'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: '60%' }}></div>
            </div>
          </td>
        </tr>

        <tr>
          {' '}
          <td>Git &nbsp;</td>
        </tr>
        <tr>
          <div class='progress'>
            <div
              class='progress-bar progress-bar-warning progress-bar-striped'
              role='progressbar'
              aria-valuenow='40'
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '82%' }}></div>
          </div>
        </tr>

        
      </table>
    );
  }
}
