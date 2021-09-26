import './index.scss';

export const TabPanel = () => {
  return (
    <div className="tab-panel">
      <div className="real-estate-info">
        <form className="real-estate-form">
          <table>
            <tbody>

              <tr>
                <th>
                  <label htmlFor="1">物件価格</label>
                </th>
                <td>
                  <input id="1" type="number"></input>万円
                </td>
              </tr>
              <tr>
                <th>
                  <label>満室想定年収</label>
                </th>
                <td>
                  <input type="number"></input>万円
                </td>
              </tr>
              <tr>
                <th>
                  <label>想定空室率</label>
                </th>
                <td>
                  <input type="number"></input>%　
                </td>
              </tr>
              <tr>
                <th>
                  <label>諸経費</label>
                </th>
                <td>
                  <input type="number"></input>万円
                </td>
              </tr>
              <tr>
                <th>
                  <label>自己資金</label>
                </th>
                <td>
                  <input type="number"></input>万円
                </td>
              </tr>
              <tr>
                <th>
                  <label>借入金額</label>
                </th>
                <td>
                  <input type="number"></input>万円
                </td>
              </tr>
              <tr>
                <th>
                  <label>借入期間</label>
                </th>
                <td>
                  <input type="number"></input>年　
                </td>
              </tr>
              <tr>
                <th>
                  <label>借入金利</label>
                </th>
                <td>
                  <input type="number"></input>%　
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}