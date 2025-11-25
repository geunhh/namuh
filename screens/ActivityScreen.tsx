import React from 'react';
import { Activity } from '../types';

export const ActivityScreen: React.FC = () => {
    // Quick Stats Icons
    const quickStats = [
        { label: 'Growth', iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4WeROx4h-4zOXEDDUcfSu1yuO1ce5TeTfvDHpPJA7Ag26KdzI5PKaMGe7w-OSRYBQogsy90jvoMmFz3ItkEr3JGxSG3UfNHbVj42fT3SZ0KmTeRkIiG6ttzFSp5D0dRtr6cg2U2ofobYAoTjUDJf9b44BzC7QsvA1OAAlK0pRFXWQunLB_ueBNfahDv0Q0eCprD2qBB5xXRY_icPlf6486AvT5fw-C8OSyLQZ7RKEhN3mJ6y2cJP0S8VrBAKaLmbIreC5UMT4uH8' },
        { label: 'Checkup', iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvD2iOP6Ak5AElDtKSmGVGgbWLy27hCv5-R-H2djm_ioFAD9AiCKL8PGL4oHhuvvhUF5uZfD0fShAd3jXJrPxsgVMj5OdOqGurbMF_8cHbLLsmGfi76uIgP8IJioJFe3xIMeKvC3274eddWEb-ULiSzv5e7iOyGqNc4Tu8-hTwze1os6ouskZBFezkEQ9xgzWj9ZmpP0gQCY8UkANBn49_h6QcE5sUQv6QNSJeijck2NX6ymCfzeZjxgQNFknAkhblzD4COhIak0A' },
        { label: 'Stats', iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIKDDSwBrMg8-QzVt0GLQjk4JZYKsJPX1DgVWvFZvFK8kjmrVGqNI6PrC74PWuK66mTB7zjwBENDGvLUpyV_6Ib3Co3AjdIanEEXoO2ThpefYkrdR4WNueL9eQJ7p8Mhd9o9sN1G2DOkj9WvY-L1MWELYZmcJKwKCPaw-ffPyQZvLfAs0IshPytFCUbrRZxjWLs7vLbxE5hxbcGE9KlS8n32wLeqgeQ9UTc1Cq1wJv8gQXoNcQ87xlFyMRzgPztBd5bsbDE-fLAZ4' },
        { label: 'Log', iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVt1tc1MW6KgYKpbaHzqm_G5VyhQaBHRI4e0UiUvMKGG31hOJ3WZiHeEmBcSlJzWC-1Cc8GSMMOIOeth9lDbu5o4O_JjgFexmANioprvGVWWuD4DMpxtiIjcu5yM89aHC_GVeDfc6ssHXODOKHFyDY_f0ZITAgKQAeRLmBsw907KWJU7SDj25-xi-UjhWMwOE4NpV_lHba4wXE61LzvbXqPLWSp5cV_WGsElgSJTcncqwnLdZR8VtYFvkI6GCXLOBUUfd4GROXh0k' },
    ];

    // Summary Bubbles
    const summaryBubbles = [
        { label: '0ml', bg: 'bg-orange-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMrgCBvu4e2Zxol-bvFlMqIXbB3Ys6yc6-6QqJGnxDDma64reNRD2Hh5wPgaKIvsHOmFFqaUk8clZx-KIdVEVADeRleG_WfdFNSk4429hY_-6qap_L9sIDFBjXwzxipO7Hx7-77Ur7dyBZ_LvCzl2GwgeZnYlTsyQXUOEbsxgW_CPs6aEv2_1sS42O0fl_0gDbXVQWecDBBie6v0IB_6wiL3ktnP-xnZY2tGhwwlscQGFoQ2P097YhgkKOf_uNYI3vcRgjGQLPEk0' },
        { label: '200ml', bg: 'bg-purple-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5bopTNQnaWUFGOx3wFNp48wS356iPrJcoz-HPQari5QTYvfl2kkKWSBcBaEB82y97ydCLCUNbNRyA5VKfQZXSbrXJdSx2G1dwSYlFpn_nBYqMX1jQKRYfu3wOD7AL2UGZbgZocBKTADhk5VSvdVXUrJ3v0Obqym22xkfufPxYs7nqsyHSlA-Z6flrmikjkyWd6sf_G3wcpt0dygvEFC2ZY8lAi1GZXyKDuPb326kYJuPk8OTqsZuCvFGaMwTMn9WADKG4pv3j7Lw' },
        { label: '3 Hr', bg: 'bg-pink-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOtrV6jvIvhUQstJl0qRMPMOq-q23EoSXeFsnMbLX2SWHyEH1_QIamQghGKHIrbhYRjDTRjD4wud4i9XjzsSNbLXPS4SXpHv0lH7rzwtKRajX4S4Wx1yDPh5eQo6YEcNCZDhdhVzdNyFKsSmg63mRUGGz8TAFhBnIF3bHTBkpQlod82QqOCRBXzB5rTgQq4Ava5LodFAo2jG8dMJ-6Wd5wymNmXvq3j-xJSTyDKrFeElmBZUAsPXXc0g6bx5oYU6ywWBW-NUiKAs4' },
        { label: '300ml', bg: 'bg-yellow-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeh80mZEe_mA7Nb5_-g5ClK4q6wg8nj05JXNkK8Hi5REfOQlGZtZqOycaBVWxbC36I248Un-rvS1fOeG-_IDgABmXIbVBzfqH_eJPHqbgUuGSwao_D4zNeQuTBQBcv43pz16KKeu6cjhItEOkESGMyLteWay7UsIz1-Mx6Tq_3gGLQ89Ygl73pa8jzvF_mc_J7xiWO_vsAkdPt15Gu2fufXQpcsa5xQhq1NTTSDs3QgbxiYsOUhhNjoUVpBOlZhhTUUGVxEv7mFxI' },
        { label: '3x', bg: 'bg-gray-200', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7MQOknbjED14LzyfNvS9NzBLwKS2a4c43K_ApwJqqnPkwvjX8zkr58m2rXCh3537iCOu1pGGGcgM23-x2GW63eLvZUnMz6k7-3DkllVPmpc6I8_UClW4MzMkaMalODFJzEKEJbnzs8-2PRbiZQaFB6jQvja8YUb_niaAyP3ZtwkhR7sj0jpaOr4IS0q0_nRX9cRyq4BvsMEi_i8rY8NnOktLo56XSzsl7BOhbxjWCA-2VZ8mIiPc5udlehicm8VSKrfXJG8ItW-I' },
        { label: '6 Hr', bg: 'bg-teal-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhDNYPH7cKqXHUIIhf8ST4NMa3wcOsd-M3aHPuFJPJ6SspTCcU7pjy3LRhKVd_tYD26drQDOkAAqQRg9_0hD8u-fXUBYk1N_u2K3TYh60CUhgr0XRbwGMj3LIk3WLqf17osv91xPegxQVXIEbLDycnt5nwbHntEO2hSmaVzWChe6jItEWHe_U-bjxiJuQT70wi_IHbsGN-8fYA8AOZlWWfq9WT0uAaJ1ixt6hCINBjaH-uEIf6NKHUy7hKq6Hk1fpHpW6pIC5lDHw' },
    ];

    const timelineData: Activity[] = [
        { id: '1', type: 'bottle', time: '22:30', details: 'Breast Feeding', amount: 'Left 15m, Right 15m', color: 'bg-pink-400' },
        { id: '2', type: 'pump', time: '20:30', details: 'Pump Feeding', amount: '200ml', color: 'bg-purple-400' },
        { id: '3', type: 'feed', time: '18:20', details: 'Bottle', amount: '0ml', color: 'bg-blue-400' },
        { id: '4', type: 'sleep', time: '~09:20', details: 'Sleep', amount: '11h 20m', color: 'bg-teal-400' },
    ];

  return (
    <div className="flex flex-col h-full pb-24 px-4 pt-2">
      {/* Header Info */}
      <header className="py-4">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
                 <img
                    alt="Baby profile"
                    className="w-14 h-14 rounded-full border border-gray-700 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvrj5m5PVKLPRSiEcjSqL8h6ko1XXox9rOAuCQzBc6hpyW97plELmBVC26G7RTg-cI3YWFldUv4k7NZC4Z9Wgxuq0pJFzrl7ORturL9lN-L2Gs5nuzK0JCit4AG0x_VuHxkS16zOVBZXGaS0YT9LLcss298eTNC110XMT-Ajlxij0N9jl7KoXavesTxU7LU5OsCtQGqwfkQ2L_vq3DEmtSHgoLU7RkkFuNxRmak0iymPKFnOHLRwzkqmA7_zHX9S2TsExTz7ICwkU"
                />
                <div>
                    <h1 className="text-xl font-bold text-white">Keun-heo</h1>
                    <p className="text-xs text-text-dark-secondary">Male · 1m 29d, 0yo</p>
                </div>
            </div>
             <div className="flex items-center space-x-2">
                <span className="material-icons text-text-dark-secondary">notifications_none</span>
                <span className="material-icons text-text-dark-secondary">more_vert</span>
            </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
            {quickStats.map((stat) => (
                <div key={stat.label} className="bg-card-dark rounded-xl p-2 flex flex-col items-center justify-center shadow-sm h-20">
                    <img src={stat.iconUrl} alt={stat.label} className="w-8 h-8 mb-1" />
                    <span className="text-[10px] text-text-dark-secondary font-medium">{stat.label}</span>
                </div>
            ))}
        </div>
      </header>

      {/* Date Navigator */}
      <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-white font-semibold space-x-2">
              <span className="material-icons text-sm">chevron_left</span>
              <span className="material-icons text-sm">calendar_today</span>
              <span>Nov 12 (Today)</span>
              <span className="material-icons text-sm">chevron_right</span>
          </div>
          <button className="px-3 py-1 rounded-full border border-gray-600 text-xs text-gray-300">
              Pattern
          </button>
      </div>

      {/* Horizontal Scroll Summary */}
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2 mb-2 -mx-4 px-4">
        {summaryBubbles.map((bubble, idx) => (
             <div key={idx} className="flex-shrink-0 flex flex-col items-center">
                 <div className={`w-14 h-14 ${bubble.bg} rounded-2xl flex items-center justify-center mb-1 shadow-sm`}>
                    <img src={bubble.icon} alt={bubble.label} className="w-8 h-8" />
                 </div>
                 <span className="text-[10px] text-gray-400 font-medium">{bubble.label}</span>
             </div>
        ))}
      </div>

      {/* Vertical Timeline */}
      <div className="space-y-4 mt-2">
        {timelineData.map((item, index) => (
            <div key={item.id} className="flex items-start space-x-4 relative">
                 <div className="flex flex-col items-center w-12 pt-1">
                    <span className={`text-sm font-bold ${item.color.replace('bg-', 'text-')}`}>{item.time}</span>
                    {/* Line connector */}
                    {index !== timelineData.length - 1 && (
                        <div className={`w-0.5 h-full min-h-[4rem] mt-2 bg-gray-700/50 rounded-full`}></div>
                    )}
                 </div>
                 
                 <div className="flex-1 bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-800/50 flex justify-between items-center group cursor-pointer hover:bg-card-dark/80 transition-colors">
                     <div>
                         <h3 className="font-bold text-white text-base">{item.details}</h3>
                         <p className="text-sm text-text-dark-secondary mt-0.5">{item.amount}</p>
                         <div className="flex items-center space-x-3 mt-2">
                            <div className="flex items-center text-xs text-text-dark-secondary bg-gray-800/50 px-2 py-0.5 rounded-md">
                                <span className="material-icons text-[14px] mr-1">edit_note</span> Memo
                            </div>
                            <div className="flex items-center text-xs text-text-dark-secondary bg-gray-800/50 px-2 py-0.5 rounded-md">
                                <span className="material-icons text-[14px] mr-1">photo_camera</span> Photo
                            </div>
                         </div>
                     </div>
                     <span className="material-icons text-gray-600 group-hover:text-gray-400">chevron_right</span>
                 </div>
            </div>
        ))}
      </div>
    </div>
  );
};
