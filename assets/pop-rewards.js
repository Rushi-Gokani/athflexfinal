async function updateVipRewards(){
  const shopifyDomain = 'indus-valley2.myshopify.com';

  const brandDetails = await fetch(`https://brand-loyalty.popclub.co.in/api/get-brand?shop=athflex-clothing.myshopify.com`).then((response)=>response.json())

  const vipRewardsDiv = document.querySelector('.pop-rewards__vip-rewards__cards');

  if(vipRewardsDiv && brandDetails.is_membership_activated && Object.keys(brandDetails.membership_tiers).length > 1){
    let htmlStr = ``;

    for(const curr in brandDetails.membership_tiers){
        const currStr = `<div class="vip-rewards-card">
          <div class="vip-rewards-header">
            <div class="vip-tier">${curr}</div>
            <span class="vip-spend">Spend at least ₹500 to reach this level</span>
          </div>
          <div class="vip-rewards-benefits">
            <div class="benefits-title">Benefits</div>
            <div class="benefits-list">
              <span>Redemption: ${brandDetails.membership_tiers[curr].redemption_rate}</span>
              <span>Issuance: ${brandDetails.membership_tiers[curr].issuance_rate}%</span>
            </div>
          </div>
        </div>`
      htmlStr+=currStr;
    }

    document.querySelector('.pop-rewards__vip-rewards__cards').innerHTML = htmlStr;
    document.querySelector('.pop-rewards__vip-rewards.hidden-pop').classList.remove('hidden-pop');
  }
  
}

updateVipRewards();