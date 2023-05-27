import React from 'react'
import MainLayoutAuth from '../../layouts/mainLayoutAuth'
import { Select } from '../customComponents'
import { typeOfStatementSelect } from '../../utils/utilArrays'

const UploadFile = () => {
  return (
    <div class="content container-fluid">
					<div class="row">
						<div class="col-md-8 offset-md-2">
						
							<div class="page-header">
								<div class="row">
									<div class="col-sm-12">
										<h3 class="page-title">Rdf Reader</h3>
									</div>
								</div>
							</div>
						
							<form>
								<div class="form-group row">
									<label class="col-lg-3 col-form-label">Institution</label>
									<div class="col-lg-9">
                   <Select name="select" id="select"  arrayData={typeOfStatementSelect} />
									</div>
								</div>
               <br />
								<div class="form-group row">
									<label class="col-lg-3 col-form-label">Select PDF</label>
									<div class="col-lg-7">
										<input type="file" class="form-control"/>
										<span class="form-text text-muted">Recommended image size is 40px x 40px</span>
									</div>
									<div class="col-lg-2">
										<div class="img-thumbnail float-right"><img src="assets/img/logo2.png" alt="" width="40" height="40"/></div>
									</div>
								</div>
							
								<div class="submit-section">
									<button class="btn btn-primary submit-btn">Save</button>
								</div>
							</form>
						</div>
					</div>
                </div>
  )
}

export default MainLayoutAuth(UploadFile)