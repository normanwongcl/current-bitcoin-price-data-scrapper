### Data model
- Can be seen in prisma/schema.prisma file
- CryptoCurrency table: Dimension table for storing each crypto details
- CurrentPriceUSD table: Fact Table for storing USD price history
- CurrentPriceGBP table: Fact Table for storing GBP price history
- CurrentPriceEUR table: Fact Table for storing EUR price history

### Cron Job API
```
http://localhost:3000/api/cron
```
- Fetch latest price from Coindesk API
- Store price in MySQL database
    - Create new crytocurrency entry in CryptoCurrency Table if chartName does not exist in table
    - store latest price in CurrentPriceUSD, CurrentPriceGBP, CurrentPriceEUR table
- (Not implemented): Was planning to use Github Action scheduled workflow to hit this endpoint every minute to trigger the api.

## Cryptocurrency API

```
http://localhost:3000/api/cryptoprice/[id]
```
- Output sample:
```json
{
    USD: [...],
    EUR: [...],
    GBP: [...],
}
```
- Fetch all prices of the cryptocurrency that was specify

### Query String to filtered out prices

```
http://localhost:3000/api/cryptoprice/bitcoin?timerange=10
```
- timerange=10 will return all prices before 10 minutes

<h2 align="left">
  <img src="https://github.com/normanwongcl/take-home-assessment-1480332513/blob/main/assets/filter-time-range.png" alt="filter time" width="800px" />
  <br>
</h2>
- The Filter time range select menu input will use either 10 minutes, 60 minutes or 120 minutes as the filtering range in the frontend.