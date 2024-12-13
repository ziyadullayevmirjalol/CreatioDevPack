update public."JamesRealtyFreedomUI"
set "JamesCommisison" 
 case
  when "JamesOfferTypeId" = "4315A7DA-A261-484C-8C43-C97067770489"  then "JamesPriceUSD" * 0.02 -- sale, 2%
  when "JamesOfferTypeId" = "6EA2781B-CE47-400D-A5BB-558336BC3FD4"  then "JamesPriceUSD" * 0.50 -- rental, 50%
 end 
where JamesCommision = 0
