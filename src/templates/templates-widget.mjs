const CSS_DEFAULT = `
<style>

</style>`;

const CSS_RIS = `
<style>
select {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAANCAMAAACJrC6lAAAAElBMVEUAAAD///+ampqcnJydnZ2dnZ2R/6zGAAAABXRSTlMAAAEBAa21bVEAAAA/SURBVHjalc9RCgAgCERBs/b+V04MsVgJXOhreEgyvnOWZ32GJoP4dizmdGh9G/O0Qhydv5q9Ny05+va/aQ3eBz0BWHmtb2cAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 23px 9px;
  -moz-box-sizing: border-box;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -webkit-box-sizing: border-box;
  background-color: #fff;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0;
  outline: none;
  padding: 11px 30px 10px 10px;
  vertical-align: middle;
  font-family: "inter", -apple-system, "Helvetica Neue", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #4a4a4a;
  line-height: 20px;
  min-width: 40px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.4);
}
</style>`;

const SCRIPT_DEFAULT = `
<script>
    console.log('widget loaded');

</script>`;

const HTML_DEFAULT = `
${CSS_DEFAULT}
${CSS_RIS}
${SCRIPT_DEFAULT}
`;

const HTML_CUSTOM = `
${CSS_DEFAULT}
${SCRIPT_DEFAULT}
`;

const HTML_FORM = `<form method="get" id="ris-search-program">
<h2 class="center-text pt-3 pb-2">Search for transportation programs</h2>
<ul class="columns align-c">
    <li class="pr-3 w-25 m-w-100">
        <div class="block pb-2">
            <select class="w-100" id="select-state">
                <option value="">... select state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </div>
    </li>
    <li class="pr-3 w-25 m-w-100 disabled" id="block-county">
        <div class="block pb-2">
            <select class="w-100" id="select-county">
                <option value="">... select county</option>
            </select>
        </div>
    </li>
    <li class="pr-3 w-25 m-w-100">
        <div class="block pb-2">
            <input type="text" id="keyword" name="ris_keyword" placeholder="keyword" class="w-100" value="">
            <h6 class="p-0 m-0">i.e. Wheelchair, Free</h6>
        </div>
    </li>
    <li class="pr-3 w-25 m-w-100">
        <div class="block">
            <input type="button" value="Search" id="search" class="w-100 button-search">
        </div>
    </li>
</ul>
</form>`;

const JS_WIDGET = `; (function (window, document) {
  let widget = document.getElementById('widget-ris');
  if(widget!= null){
    let htmlWidget =\`${CSS_RIS} ${HTML_FORM}\`;
    let divWidget = document.createElement('div');
    divWidget.className = 'ris-widget';
    divWidget.innerHTML = htmlWidget;
    widget.after(divWidget);
  }else{
    console.log('cannot load RIS widget');
  }
})(window, document);`;


export default { JS_WIDGET };