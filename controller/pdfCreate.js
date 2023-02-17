async function getHtmlContent(data){
    try{

        let css = `.invoice{
            border: 1px solid black;
            margin: 30px;
            /* width: 21cm;
            height: 29.7cm; */
        
        }
        
        header .right{
        font-size: 2.4rem;
        padding-top: 11%;
        padding-left: 20%;
        }
        
        .shippingDetails .left ,.shippingDetails .right{
        width: 45vw;
        }
        
        .title{
        background-color: lightgrey;
        }
        
        .thead{
        background-color: lightgrey;
        }
        
        footer .left , footer .right{
        width: 45vw;
        }
        
        .totalRs , .authSign{
        height: 100px;
        border: 1px solid black;
        }
        
        
        @media screen and (max-width: 22cm) {
        .invoice{
        height: 29.7cm;
        width: 21cm;
        }
        
        header .right{
        font-size: 1.5rem;
        padding-top: 20%;
        padding-left: 0%;
        /* 		width: 0px; */
        }
        }`

        let logoUrl = `https://media.licdn.com/dms/image/C4D0BAQFsb1FUZlm7VQ/company-logo_200_200/0/1653373725419?e=2147483647&v=beta&t=Px09afQ77kT0wtN7_An4Uv8mjBFkzpOjs59Vh8AwEfg`;

        let html = `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Invoice</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <!-- <link rel="stylesheet" type="text/css" href="/invoice.css"> -->
            <style type="text/css">${css}</style>
        
        </head>
        <body>
        
            <div class="invoice">
                <header class='d-flex '>
                    <div class="left d-flex">
                        <img src=${logoUrl}>
                        <div class="CompDetails m-4">
                            <h3>Depo Solutions Private Limited</h3>
                            <p class="m-0">77/1/A, Christopher Road, Topsia,</p>
                            <p class="m-0">Kolkata - 700046</p>
                            <p class="m-0">West Bengal</p>
                            <p class="m-0">GSTIN: 19AAJCD1058P1Z4</p>
                        </div>
                    </div>
        
                    <div class="right">
                        <span>Proforma Invoice</span>
                    </div>
                </header>
                
                <main class="border">
                    <div class="shippingDetails d-flex justify-content-between">
                        <div class="left border flex-fill">
                            <div>
                                <p class="d-flex justify-content-between p-0 m-0 px-3"><span>#</span><b>:DEPO/KOL/PI/000007</b></p>
                                <p class="d-flex justify-content-between p-0 m-0 px-3"><span>Estimate Date</span><b>:30/01/2023</b></p>
                            </div>
                        </div>
                        <div class="right border flex-fill">
                            <div>
                                <p class="d-flex justify-content-between p-0 m-0 px-3"><span>Place Of Supply</span><b>: West Bengal (19)</b></p>
                            </div>
                        </div>
                    </div>
        
        
                    <div class="shippingDetails d-flex justify-content-between">
                        <div class="left border flex-fill">
                            <div class="ps-2 title"><b>Bill To</b></div>
                            <div class="mx-2 mb-2">
                                <h3>Depo Solutions Private Limited</h3>
                                <p class="m-0">77/1/A, Christopher Road, Topsia,</p>
                                <p class="m-0">Kolkata - 700046</p>
                                <p class="m-0">West Bengal</p>
                                <p class="m-0">GSTIN: 19AAJCD1058P1Z4</p>
                            </div>
                        </div>
                        <div class="right border flex-fill">
                            <div class="ps-2 title"><b>Ship To</b></div>
                            <div class="mx-2 mb-2">
                                <p>Depo Solutions Private Limited</p>
                                <p class="m-0">77/1/A, Christopher Road, Topsia,</p>
                                <p class="m-0">Kolkata - 700046</p>
                                <p class="m-0">West Bengal</p>
                                <p class="m-0">GSTIN: 19AAJCD1058P1Z4</p>
                            </div>
                        </div>
                    </div>
        
                    <table class="table table-bordered border-dark">
                        <thead class='thead'>
                            <tr>
                                <th rowspan="2">#</th>
                                <th rowspan="2">Item and Description</th>
                                <th rowspan="2">HSN / SAC</th>
                                <th rowspan="2">Qty</th>
                                <th rowspan="2">Rate</th>
                                <th rowspan="2">Discount</th>
                                <th  colspan="2">CGST</th>
                                <th  colspan="2">SGST</th>
                                <th rowspan="2">Amount</th>
                            </tr>
                            <tr>
                                <th>%</th>
                                <th>Amt</th>
        
                                <th>%</th>
                                <th>Amt</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            <tr>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                            </tr>
        
                            <tr>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                            </tr>
        
                            <tr>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                            </tr>
        
                            <tr>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                                <td>sdd</td>
                            </tr>
                            
                        </tbody>
        
        
                    </table>
        
        
                </main>
        
                <footer class="d-flex">
                    <div class="left flex-fill border">
                        <p>Total in words</p>
                        <p><b>Indian Rupee Two Thousand One Hundred Fifty-Three and Fifty Paise
        Only</b></p>
                    </div>
                    <div class="right flex-fill border">
                        <div class="totalRs">
                            <div class= "d-flex justify-content-center ">
                                <p class="mx-4 my-0">Sub Total</p>
                                <span class="mx-4 ">343</span>
                            </div>
                            <div class= "d-flex justify-content-center ">
                                <p class="mx-4 my-0">CGST(9%)</p>
                                <span class="mx-4">343</span>
                            </div>
                            <div class= "d-flex justify-content-center ">
                                <p class="mx-4 my-0">SGST(9%)</p>
                                <span class="mx-4">343</span>
                            </div>
                            <div class= "d-flex justify-content-center ">
                                <p class="mx-4 my-0 flex-end"><b>Total</b></p>
                                <span class="mx-4"><b>34848</b></span>
                            </div>
        
                        </div>
                        <div class="authSign"></div>
                    </div>
                </footer>
            </div>
        
        </body>
        </html>`;

        return html;
    }
    catch(err){
        console.log("Error while feching html ",err);
    }
    
}


async function getList(){
    try{
        let data = '';
        for(let i=0 ; i<10 ; i++){
            data+=`<h4>This is Count ${i}</h4>`
        }
        return data;

    }
    catch(err){
        console.log("Error while feching html ",err); 
    }
}

module.exports = getHtmlContent;