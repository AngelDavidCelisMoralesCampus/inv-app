export class CustomerForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /*html*/ `
        <div class="card">
            <h5 class="card-header">Registro de clientes</h5>
                <div class="card-body">
                    <div class="container">
                        <div class="row g-3">
                            <div class="col-12">
                                <form id = "frmData">
                                    <div class="row g-3">
                                        <div class="col-3">
                                            <label for="createdAt" class="form-label">Fecha registro</label>
                                            <input type="date" class="form-control" id="createdAt" name="createdAt">                  
                                        </div>

                                        <div class="col-4">
                                             <label for="cc" class="form-label">Documento del Cliente</label>
                                            <input type="text" class="form-control" id="cc" name="cc">
                                        </div>

                                        <div class="col-3">
                                            <label for="nombres" class="form-label">Nombre del Cliente</label>
                                            <input type="text" class="form-control" id="nombre" name="nombre">
                                        </div>

                                        <div class="col-3">
                                            <label for="apellido" class="form-label">Apellido del Cliente</label>
                                            <input type="text" class="form-control" id="apellido" name="apellido">                  
                                        </div>

                                        <div class="col-3">
                                            <label for="emailCliente" class="form-label">Email del Cliente</label>
                                            <input type="date" class="form-control" id="email" name="email">                  
                                        </div>                
                                        <div class="col-3">
                                            <label for="telefono" class="form-label">Nro de Telefono</label>
                                            <input type="date" class="form-control" id="telefono" name="telefono">                  
                                        </div>
                                        <div class="col-3">
                                            <label for="fechanac" class="form-label">Fecha de Nacimiento</label>
                                            <input type="date" class="form-control" id="fechanac" name="fechanac">                  
                                        </div>
                                    </div>
                                </form>
                            </div>        
                        </div>                                     
                    </div> 
                        <div class="container mt-4 text-center">
                            <a href="#" class="btn btn-success" id="btnGuardar">Guardar cliente</a>
                        </div>
                 </div>
        </div>`
        }
}
customElements.define("customer-form", CustomerForm);