/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Card, Button, Accordion, Form, FormGroup } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { taskIcon } from '../../assets';

const Tugas = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col mx-auto text-center">
          <h1>Tugas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Accordion>
            <Card className="pb-3">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="head text-decoration-none"
              >
                <Card.Header>
                  <div className="row text-left ">
                    <div className="col-1">
                      <img src={taskIcon} alt="img" className="iconTask" />
                    </div>
                    <div className="col">
                      <h6 className="head mt-2">Tugas 1</h6>
                    </div>
                    <div className="col-3">
                      <h6 className="head mt-2">Tenggat Waktu</h6>
                    </div>
                    {/* <div className="col-3">
                      <h6 className="head mt-2 accepted">Dikumpulkan</h6>
                    </div> */}
                    {/* <div className="col-3">
                      <h6 className="head mt-2 expired">Terlambat</h6>
                    </div> */}
                  </div>
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="asd">
                  <div className="row">
                    <div className="col">
                      <h6>Deskripsi</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        Lorem Ipsum adalah contoh teks atau dummy dalam industri
                        percetakan dan penataan huruf atau typesetting. Lorem
                        Ipsum telah menjadi standar contoh teks sejak tahun
                        1500an, saat seorang tukang cetak yang tidak dikenal
                        mengambil sebuah kumpulan teks dan mengacaknya untuk
                        menjadi sebuah buku contoh huruf. Ia tidak hanya
                        bertahan selama 5 abad, tapi juga telah beralih ke
                        penataan huruf elektronik, tanpa ada perubahan apapun.
                        Ia mulai dipopulerkan pada tahun 1960 dengan
                        diluncurkannya lembaran-lembaran Letraset yang
                        menggunakan kalimat-kalimat dari Lorem Ipsum, dan
                        seiring munculnya perangkat lunak Desktop Publishing
                        seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
                      </p>
                    </div>
                  </div>

                  <div className="row ml-1 ">
                    <div className="wrapFile">
                      <Link to="_blank" key="_blank">
                        <div className="row">
                          <div className="col-2 my-auto">
                            <img
                              src={taskIcon}
                              alt="img"
                              className="taskIcon"
                            />
                          </div>
                          <div className="col dataText text-center my-auto">
                            <p>Tugas1_1301147245.docs</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="row mt-2 border-top">
                    <div className="col mt-4 mx-auto">
                      <Form>
                        <FormGroup>
                          <div className="input-group mb-3">
                            <div className="custom-file">
                              <Input
                                type="file"
                                class="custom-file-input"
                                id="inputGroupFile01"
                                // onChange={(e) => {
                                //   setUsername(e.target.value);
                                // }}
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile01"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                        </FormGroup>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Tugas;
