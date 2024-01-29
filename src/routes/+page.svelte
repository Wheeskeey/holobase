<svelte:head>
  <title>HoloBase API</title>
</svelte:head>

<div class="prose m-auto">
  <h1>Welcome to HoloBase API</h1>

  <p><a href="https://github.com/Wheeskeey/holobase" rel="external" target="_blank">https://github.com/Wheeskeey/holobase</a></p>
  
  <div class="join join-vertical w-full">
    <div class="collapse collapse-arrow join-item border border-base-200">
      <input type="radio" name="rest-accordion" class="peer" />
      
      <div class="collapse-title text-xl font-medium peer-checked:bg-base-200">
        GET /api/facejoints
      </div>

      <div class="collapse-content peer-checked:bg-base-200">
        <p>Returns all face joints</p>

        <span class="font-bold text-xl">Parameters</span>
        <p>none</p>

        <span class="font-bold text-xl">Responses</span>
        
        <table class="table">
          <thead>
            <tr>
              <th>http code</th>
              <th>content-type</th>
              <th>response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>200</th>
              <th>application/json</th>
              <th>&lbrace;status: "success", data: &lbrack;...&rbrack;&rbrace;</th>
            </tr>
            <tr>
              <th>400</th>
              <th>application/json</th>
              <th>&lbrace;status: "fail", message: "&lt;error message&gt;"&rbrace;</th>
            </tr>
            <tr>
              <th>500</th>
              <th>application/json</th>
              <th>&lbrace;status: "fail", message: "Something went wrong on the server side"&rbrace;</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="collapse collapse-arrow join-item border border-base-200">
      <input type="radio" name="rest-accordion" class="peer" />
      
      <div class="collapse-title text-xl font-medium peer-checked:bg-base-200">
        POST /api/facejoints
      </div>

      <div class="collapse-content peer-checked:bg-base-200">
        <p>Creates a new joint and returns its data</p>

        <span class="font-bold text-xl">Parameters</span>

        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>name</th>
                <th>type</th>
                <th>data type</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>joint</th>
                <th>required</th>
                <th>string</th>
                <th>-</th>
              </tr>
              <tr>
                <th>x</th>
                <th>required</th>
                <th>float</th>
                <th>-</th>
              </tr>
              <tr>
                <th>y</th>
                <th>required</th>
                <th>float</th>
                <th>-</th>
              </tr>
              <tr>
                <th>z</th>
                <th>required</th>
                <th>float</th>
                <th>-</th>
              </tr>
            </tbody>
          </table>
        </div>

        <span class="font-bold text-xl">Responses</span>

        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>http code</th>
                <th>content-type</th>
                <th>response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>200</th>
                <th>application/json</th>
                <th>&lbrace;status: "success", message: "Joint added!", data: &lbrack;...&rbrack;&rbrace;</th>
              </tr>
              <tr>
                <th>400</th>
                <th>application/json</th>
                <th>&lbrace;status: "fail", message: "&lt;error message&gt;"&rbrace;</th>
              </tr>
              <tr>
                <th>500</th>
                <th>application/json</th>
                <th>&lbrace;status: "fail", message: "Something went wrong on the server side"&rbrace;</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="collapse collapse-arrow join-item border border-base-200">
      <input type="radio" name="rest-accordion" class="peer" />
      
      <div class="collapse-title text-xl font-medium peer-checked:bg-base-200">
        DELETE /api/facejoints
      </div>

      <div class="collapse-content peer-checked:bg-base-200">
        <p>Deletes all face joints. WARNING: DESTRUCTIVE!</p>

        <span class="font-bold text-xl">Parameters</span>
        
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>name</th>
                <th>type</th>
                <th>data type</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>consent</th>
                <th>required</th>
                <th>string</th>
                <th>"i'm absolutely sure"</th>
              </tr>
            </tbody>
          </table>
        </div>

        <span class="font-bold text-xl">Responses</span>
        
        <table class="table">
          <thead>
            <tr>
              <th>http code</th>
              <th>content-type</th>
              <th>response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>200</th>
              <th>application/json</th>
              <th>&lbrace;status: "success", message: "All records from FaceJoints deleted"&rbrace;</th>
            </tr>
            <tr>
              <th>400</th>
              <th>application/json</th>
              <th>&lbrace;status: "fail", message: "&lt;error message&gt;"&rbrace;</th>
            </tr>
            <tr>
              <th>500</th>
              <th>application/json</th>
              <th>&lbrace;status: "fail", message: "Something went wrong on the server side"&rbrace;</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="collapse collapse-arrow join-item border border-base-200">
      <input type="radio" name="rest-accordion" class="peer" />
      
      <div class="collapse-title text-xl font-medium peer-checked:bg-base-200">
        DELETE /api/facejoints/&lbrace;id&rbrace;
      </div>

      <div class="collapse-content peer-checked:bg-base-200">
        <p>Deletes a face joint with provided id. WARNING: DESTRUCTIVE!</p>

        <span class="font-bold text-xl">Parameters</span>
        <p>none</p>

        <span class="font-bold text-xl">Responses</span>
        
        <table class="table">
          <thead>
            <tr>
              <th>http code</th>
              <th>content-type</th>
              <th>response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>200</th>
              <th>application/json</th>
              <th>&lbrace;status: "success", message: "Joint deleted!"&rbrace;</th>
            </tr>
            <tr>
              <th>400</th>
              <th>application/json</th>
              <th>&lbrace;status: "fail", message: "&lt;error message&gt;"&rbrace;</th>
            </tr>
            <tr>
              <th>500</th>
              <th>application/json</th>
              <th>&lbrace;status: "fail", message: "Something went wrong on the server side"&rbrace;</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>