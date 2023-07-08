/*__  __                   _______              
 |  \/  |                 |__   __|             
 | \  / | __ _  ___ _ __ ___ | | __ _  ___ ___  
 | |\/| |/ _` |/ __| '__/ _ \| |/ _` |/ __/ _ \ 
 | |  | | (_| | (__| | | (_) | | (_| | (_| (_) |
 |_|  |_|\__,_|\___|_|  \___/|_|\__,_|\___\___/ 
 */

console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⢀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣄⠀⠀⢻⣇⠀⠀⢻⠀⠀⠺⠀⠀⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⢰⡟⠀⠀⠀⣴⡖⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣇⠀⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠶⣄⠀⠀⠀⢠⠞⢳⡀⠀⠀⠀⢀⣤⢶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⢀⠞⠁⠀⢀⣤⠀⠀
⠀⠀⠀⡀⠀⠀⠙⢧⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⡟⠓⢦⣀⠀⢀⡞⠀⠈⠳⣄⡴⠋⠀⠀⠳⣄⡠⠞⠉⠀⠘⣆⠀⠀⠀⢀⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠋⠀⠀
⠀⠀⠘⠿⣦⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⡇⠀⠀⠈⠳⠞⠀⠀⠀⠀⠈⠁⠀⠀⣀⣀⣉⣀⣀⡀⠀⠀⢿⣀⡤⠚⠉⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⣴⠦
⠀⠀⡀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⡏⠓⠒⠢⣤⣴⡥⠤⢴⡀⠀⠀⠀⠀⠀⠀⢀⡤⠖⠋⠉⠉⠀⠀⢸⠁⠀⠀⠈⠁⣀⣠⣤⠼⠧⢤⡀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀
⠀⠀⠙⠂⠀⠀⠀⠀⢀⣀⣤⡀⠀⡇⣠⠖⠋⠉⠂⠀⠀⢦⢳⠀⠀⠀⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⢀⣴⠛⠉⠀⠀⠀⠀⠀⠈⠳⣍⡏⠀⠀⠀⢀⣀⣀⠀⠀⠀⠐⠛
⠀⠀⠀⣀⣠⠴⠖⠋⠉⠁⠈⢿⢦⡇⢸⠀⠀⠀⠀⣦⠀⠀⡏⢧⠀⠀⠀⢰⠇⠀⠀⠀⢀⣶⠟⡿⢹⡏⢀⡴⡿⠁⠀⠀⠀⣠⣤⣀⠀⠀⢷⠘⣆⠀⠀⣠⣾⠁⠀⠉⠓⢦⡀⣠
⢠⢶⣻⠽⠒⠀⠂⠀⠀⠀⠀⠘⣇⢹⢸⠀⠀⠀⠀⣿⣧⠀⠘⣎⣇⠀⠀⣾⠀⠀⠀⢠⢼⣿⡾⢤⡾⢀⣾⢿⠃⠀⠀⢎⣞⡁⠀⠈⣧⠀⠈⠀⠹⣄⡴⣻⠃⠀⠀⠀⠄⣴⠃⠀
⠘⣏⠀⠀⠀⠀⡄⠀⠠⣤⡖⠚⠻⣌⡏⡇⠀⠀⠀⠻⠽⠀⠀⠘⠜⣆⢸⣿⡄⠀⠀⠘⠜⠧⠤⠤⣤⣾⢅⣿⠀⠀⠈⣾⠉⠙⢦⠀⣼⠀⠀⠀⢠⡏⢠⠇⠀⠀⢀⡞⡴⠁⠀⠀
⠀⠹⣆⣀⣤⢾⡇⠀⠸⡘⡽⢄⣀⡼⠻⡇⠀⠀⠀⢀⣠⣤⠀⠀⠀⠸⣾⡏⢷⡄⠀⠀⠀⠀⠀⠂⢸⡇⢊⣿⡀⠀⠀⡸⣄⠀⣸⡷⠃⠀⠀⠀⣾⢠⡏⠀⠀⢀⣞⡾⠁⠀⠀⠀
⠀⠀⠙⠲⢤⣄⣧⠀⠀⠁⢻⡀⣧⠀⠀⡇⠀⠀⠀⣿⣧⠙⣇⠀⠀⠀⠙⣇⣸⢿⢦⣀⠀⠀⠀⠀⠀⣷⡵⡉⢧⠀⠀⠉⠌⠍⠁⠀⠀⠀⢀⣾⣯⣞⠀⠀⠀⣨⡎⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣸⡇⠀⠀⠈⢧⠸⡄⠀⡇⠀⠀⠀⢸⣟⣆⣹⣧⡤⣶⡖⢺⣿⠀⣰⣬⣙⢛⡛⡿⣿⢿⣀⠀⠉⠳⣄⣀⠀⠀⠀⣀⣠⣼⣿⣻⣏⣈⣙⣳⡾⠉⢉⡿⠀⠀⠀⠀
⠀⢰⣴⠒⠛⠉⠀⢹⠀⠀⠀⠘⣇⢳⠀⢹⣀⢤⡴⣺⣏⣹⠈⣿⣄⣹⣷⣾⣿⣷⣿⣾⣿⠾⣿⣳⣿⣿⠿⢦⣄⣤⡀⢈⠉⢉⢉⡫⠞⢁⣿⣟⠁⠀⠈⣻⣠⠔⠋⠀⠀⠀⠀⠀
⠀⠀⠈⠙⢦⡀⠀⠈⣇⠀⣀⡤⠾⠯⣧⠘⢯⣣⣵⣷⣿⣿⢶⣿⣋⣿⣽⠿⢯⡬⠛⣫⣿⣿⣟⣿⣻⣿⣿⣤⣿⡿⠶⣗⠚⠛⠉⠀⠀⢼⠟⠘⠓⢤⡴⠛⢧⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣲⠄⠘⠻⠥⣤⣠⠴⣺⣥⣴⣋⣷⣾⣿⣽⣿⣶⣾⣿⣿⣭⣭⣷⣞⠡⠟⢉⣽⡟⠻⣽⣿⣶⣿⣿⣷⡈⢙⣦⣄⠀⠀⠈⠒⠒⠒⠋⠀⠀⠀⠀⠉⠳⣦⡄⠀⠀
⠀⠀⠀⢀⡴⠋⠁⠀⠀⠀⠀⢀⣤⣾⣥⣾⡿⠿⠛⠉⠉⠉⢀⠄⠀⠈⠉⡉⠙⠻⠿⣻⢶⣧⣉⠉⣉⣉⣹⣦⢱⣿⣿⠿⣿⡄⢻⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠉⠀⠀⠀
⠀⠠⢾⣋⣀⠀⠀⠀⠀⠀⠀⣸⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⡙⠻⣟⢿⣅⡀⣠⠿⣍⠉⣿⠠⠿⣤⠚⢻⣮⡻⣦⡀⠀⠀⠀⠠⣞⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠉⢓⡆⠀⢀⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠰⠉⡿⢿⣿⣯⣻⣾⣿⡿⢿⣦⣾⣄⡼⣿⢽⢮⡳⣄⠀⠀⠀⠈⠳⣤⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⠎⠀⢠⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠐⠁⢈⠟⣿⣿⣦⣀⡿⢷⣽⡟⠉⢳⣥⢪⣷⢻⣿⣦⡀⠀⠀⠀⠈⣿⡆⠀⠀⠀
⠀⠀⠀⢀⡼⠁⠀⢠⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⣻⣞⢿⣦⣤⣼⣦⣾⣿⣿⣶⣾⣏⣹⣾⢷⣤⡴⠞⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠉⠁⠒⢲⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⡸⢳⡻⣿⣽⣇⢀⣈⣿⣿⣿⡛⢯⣻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠂⠱⣟⣿⣏⣻⣿⣿⣿⣿⣿⣷⣿⢿⠻⣯⣳⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⡇⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠘⣟⣿⣿⡇⢙⡟⠻⠩⠉⠸⣿⡇⢿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢀⠙⣎⢿⣷⡈⠀⢛⠁⢀⠀⣱⡇⢸⠂⠀⠀⠀⠀⠀⠀
⠀⠰⠂⠀⠀⠙⢷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠰⠘⢮⡻⣿⡃⣀⣂⣡⣾⡿⣡⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣀⠀⠀⠀⠀⠈⠉⢻⠷⠶⠶⠶⠦⣤⣤⣄⣀⣄⣐⣀⣀⣀⣀⡀⠀⡀⠁⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠛⡾⢿⣛⣿⣟⣋⣴⡿⠇⠀⠀⠀⠀⠀⢤⣀
⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⢀⣠⠄⠈⠉⠉⠉⠉⠛⠛⠛⠛⠛⠛⠛⠛⠒⠒⠲⠶⠶⠶⠶⠶⣦⠤⠤⣤⣤⣴⣦⠾⠿⠛⠛⠉⠀⠀⠀⠀⠀⢄⠀⠀⠉
⠀⠀⣤⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⣀⡤⠖⠋⠙⡇⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣄⠀⠀⢰⠏⠀⠀⠀⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣦⠀
⠀⠀⠀⠀⢀⣤⠎⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⣷⠀⠀⣠⠖⠉⢧⠀⠀⠀⣠⠛⢦⡀⠀⠀⢀⡞⠈⠑⢤⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⢳⣄⠀⠀⠉⠀
⠀⠀⠀⠰⠟⠁⠀⢀⡴⠃⠀⠀⣰⠎⠀⠀⠀⠀⠀⠀⠀⣸⡶⠋⠁⠀⠀⠈⢧⣀⡴⠁⠀⠀⠉⢦⡀⡼⠁⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠀⠀⢹⣇⠀⠀⢻⣦⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣴⡟⠁⠀⢀⣾⠋⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠙⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠇⠀⢸⡆⠀⠘⣧⠀⠀⢻⣧⠀⠈⠉⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⡟⠀⠀⠘⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀`);

// --------------------- Host Macros --------------------- //

const host = {
  follow_up_message: `Hello [User's Name],${"<br>".repeat(2)}

We hope this message finds you well. We wanted to follow up regarding the case you reported to us recently. Despite our previous communication, we haven't received any response from you regarding the matter.

We understand that circumstances may have changed or that you might have been occupied with other commitments. As a result, we will be closing the case for now. However, please be aware that we are always here to assist you should you wish to revisit the matter or require any further assistance in the future.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_review_dispute_no_violation: `Hello [Host's Name],${"<br>".repeat(2)}

We hope this message finds you well. We understand your concerns regarding the review you have requested for deletion. We appreciate your feedback and bringing this matter to our attention.

After careful consideration and review of our content policy, we regret to inform you that we are unable to delete the review in question. While we understand your perspective and the impact this review may have, it does not violate our Content Policy, and we must maintain a fair and consistent approach to all host reviews.

We value your commitment to providing exceptional hospitality and understand that receiving negative feedback can be challenging. We encourage you to respond to the review in a professional and courteous manner, addressing any concerns raised and providing your perspective on the matter.

Guest reviews play a crucial role in maintaining the trust and transparency within our community. They provide valuable insights for future guests when making booking decisions and help in fostering open communication between hosts and guests.${"<br>".repeat(
    2
  )}

We appreciate your understanding in this matter. If you have any further questions or need additional assistance, please do not hesitate to reach out to us. We are here to support you and ensure a transparent and fair hosting experience for all.

You can find more information about our Policies regarding this matter in these links: ${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/13
  https://www.airbnb.com/help/article/2763
  https://www.airbnb.com/help/article/546${"<br>".repeat(2)}

You can also opt for responding to your Host, in order present your side of the story and further clarify the situation, if needed.Thank you for being a part of our community.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_review_dispute_violation: `Hello [Host's Name],${"<br>".repeat(2)}

We hope this message finds you well. We would like to inform you that we have reviewed the content of your recent review and have determined that it is in violation of our Content Policy. As a result, we will be removing the review from our platform.

At Airbnb, we strive to maintain a respectful and inclusive community where all members feel safe and valued. Our Content Policy outlines guidelines and standards that we expect all users to adhere to when sharing their experiences and feedback.

We understand that everyone has their own opinions and experiences, but it is essential to express them in a manner that aligns with our community guidelines. Unfortunately, your review did not meet these criteria, and therefore, we have taken the necessary steps to remove it.${"<br>".repeat(
    2
  )}

We value your participation in our community and appreciate your understanding and cooperation in upholding our Content Policy. Should you have any questions or require further clarification, please do not hesitate to reach out to us. We are here to assist you. Also, you can find more information about this matter in this link:

${"<br>".repeat(
  2
)}https://www.airbnb.com/resources/hosting-homes/a/how-to-handle-a-bad-review-on-airbnb-376${"<br>".repeat(
    2
  )}

Thank you for your attention to this matter.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_review_dispute_pushback: `Hello [Host's Name],${"<br>".repeat(2)}

Thank you for reaching out to Airbnb regarding your request to delete a review. We understand that you would like the review to be removed, and we appreciate your concerns. 

At Airbnb, we strive to maintain the authenticity and transparency of our review system. Reviews play a crucial role in helping our community make informed decisions. As a result, we have established clear guidelines and policies to ensure fairness and integrity.

Unless a review violates our Content Policy, we are unable to delete it. Our Content Policy prohibits certain types of content, such as hate speech, discrimination, or fraudulent activities. If the review aligns with our guidelines, it will remain visible on the platform.${"<br>".repeat(
    2
  )}

We understand that receiving a review that you disagree with can be disappointing. However, we encourage you to approach the situation constructively. Engaging in open and respectful communication allows you to share your perspective and address any concerns raised by the reviewer.

We appreciate your understanding and cooperation in this matter. If you have any further questions or need assistance with any other aspect of your Airbnb experience, please feel free to contact me.

${"<br>".repeat(2)}Warm regards,${"<br>".repeat(2)}

[Your Name]`,
  host_initiated_cancellations: `Hello [Host's Name],

  ${"<br>".repeat(
    2
  )}I hope this message finds you well. I wanted to discuss a reservation matter with you regarding the booking at your listing. We understand that unforeseen circumstances can arise, and there may be situations where you need to consider canceling the reservation.

If you do decide to cancel the reservation, please be aware that you will be subject to our Host Cancellation Policy. You can find detailed information about our cancellation policy and its terms by visiting the following link:

${"<br>".repeat(2)}https://www.airbnb.com/help/article/990.${"<br>".repeat(2)}

Additionally, we would like to emphasize that the reasoning behind your cancellation does not fall under our Extenuating Circumstances Policy. This policy covers specific unforeseen events or circumstances that are beyond your control and are listed in the policy guidelines.

We highly recommend reviewing our cancellation policy and familiarizing yourself with its details to ensure a transparent and smooth process for both you as the host and the guest.

If you have any questions or require further assistance, please don't hesitate to reach out to us. We are here to support you and provide any necessary clarification.

Thank you for your attention to this matter.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_EC_invalid: `Hello [Host's Name],${"<br>".repeat(2)}

We sincerely regret to inform you that, after careful consideration, we have determined that the reason behind your cancellations does not fall under our Extenuating Cancellations Policy. We understand that this may come as disappointing news, and we apologize for any inconvenience caused.

If you have any further questions or require clarification regarding this decision, please do not hesitate to let us know. We are here to assist you and provide any additional information you may need.

Additionally, we highly value your feedback and would appreciate hearing from you about how we can improve our services. If you have any suggestions or comments, please feel free to share them with us through our feedback form at: ${"<br>".repeat(
    2
  )}https://www.airbnb.com/help/feedback${"<br>".repeat(2)}

Again, we apologize for any inconvenience this may have caused, and we appreciate your understanding in this matter.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_EC_valid: `Hello [Host's Name],${"<br>".repeat(2)}

We hope this message finds you well. We are reaching out to inform you that we have initiated the cancellation of the reservation made under your name. As per our policy, penalties will be applied, and the guest will be fully refunded. However, we would like to offer you a 7-day window to provide us with any relevant documentation or evidence that may support your case.

During this period, we kindly request that you submit the necessary documentation to help us assess if your situation falls under our Extenuating Circumstance Policy. If the provided documentation demonstrates that your circumstances meet the criteria outlined in the policy, we will waive the penalties associated with the cancellation.${"<br>".repeat(
    2
  )}

We understand that unexpected situations can arise, and we want to ensure fairness and flexibility in our decision-making process. Therefore, we encourage you to gather the required documentation and submit it within the specified timeframe. This will allow us to thoroughly review your case and make a fair determination.

If you have any questions or need guidance regarding the documentation requirements or submission process, please feel free to reach out to us. We are here to assist you throughout this process.

Thank you for your understanding and cooperation. We appreciate your prompt attention to this matter.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_EC_valid_documentation: `Hello [Host's Name],${"<br>".repeat(2)}

We hope this message finds you well. We would like to inform you that we have reviewed the documentation you provided regarding the circumstances surrounding the cancellation of the reservation made under your name. After careful assessment, we have determined that the documentation is valid, and as a result, we will be waiving the penalties associated with the cancellation.

We understand that unforeseen situations can occur, and we strive to be flexible and fair in our policies. Your provided documentation has helped us gain a better understanding of your circumstances, and we appreciate your cooperation throughout this process.

${"<br>".repeat(
  2
)}If you have any further questions or concerns, please feel free to reach out to us. We are here to assist you.

Thank you for your understanding.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  host_EC_invalid_documentation: `Hello [Host's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We would like to inform you that we have reviewed the documentation you provided regarding the circumstances surrounding the cancellation of the reservation made under your name. We understand that you were facing challenging circumstances, and we empathize with your situation.
  
  However, after careful assessment, we regret to inform you that the documentation provided does not meet the criteria outlined in our Extenuating Circumstance Policy. We understand that this may be disappointing news, and we apologize for any inconvenience caused.${"<br>".repeat(
    2
  )}
  
  We appreciate your understanding and cooperation throughout this process. We strive to maintain a fair and consistent policy for all our hosts and guests. If you have any further questions or concerns, please feel free to reach out to us. We are here to assist you and provide any additional information you may need.
  
  Thank you for your understanding.
  
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_initiated_alterations: `Hello [Host's Name],${"<br>".repeat(2)}

  Thank you for reaching out to us regarding your desire to alter your reservation. We acknowledge your request and want to assure you that we are here to assist you.
  
  To make changes to your reservation, we offer two options:${"<br>".repeat(2)}
  
  1. If you prefer to handle the alterations yourself, you can follow the steps outlined in our help article${"<br>".repeat(
    2
  )} https://www.airbnb.com/help/article/50 ${"<br>".repeat(
    2
  )}This article provides detailed instructions on how to modify your reservation directly through our platform.${"<br>".repeat(
    2
  )}
  
  2. If you would like us to handle the changes on your behalf, we kindly request that you provide us with the specific details of the modifications you wish to make. Please send us a written confirmation, including the necessary information, and we will proceed with the alterations accordingly.${"<br>".repeat(
    2
  )}
  
  We understand that flexibility is essential, and we are committed to accommodating your needs to the best of our abilities. If you have any questions or require further assistance throughout the process, please do not hesitate to reach out to us. We are here to support you.
   
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_party_prevention: `Hello [Host's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to inform you that your reservation with your guest has been restricted due to a series of patterns that triggered our restriction system. We understand that this news may come as a disappointment, and we empathize with any inconvenience this may cause.
  
  The restriction has been put in place to ensure the safety and well-being of both hosts and guests. It is designed to prevent events such as parties and other disruptive activities from taking place in your listing. We understand that the majority of our hosts and guests appreciate a peaceful and respectful environment.${"<br>".repeat(
    2
  )}
  
  Unfortunately, in this case, the restriction cannot be waived. We take these matters seriously in order to maintain a positive hosting community for all our members. We apologize for any inconvenience this may cause you and appreciate your understanding in this matter.
  
  ${"<br>".repeat(
    2
  )}If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to assist you and provide any additional information you may need.
  
  Thank you for your understanding and cooperation.
  
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_initiating_RC_with_guest: `Hello [Host's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to update you regarding the resolution of the issue related to the reservation with the guest. We appreciate your patience and understanding throughout this process.
  
  We would like to inform you that we have reached out to the guest regarding the requested amount and are currently in the process of mediating the situation. Our priority is to ensure a fair and satisfactory resolution for both parties involved.
  
  For more information about our refund and resolution process, we recommend reviewing our Resolution Center, which provides a dedicated platform for managing and resolving issues between hosts and guests:${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/767${"<br>".repeat(2)}
  
  You can access the Resolution Center by visiting:
  
  ${"<br>".repeat(2)}https://www.airbnb.com/resolutions${"<br>".repeat(2)} 
  
  Once we receive a response from the guest, we will promptly provide you with an update. We understand the importance of timely communication and will strive to keep you informed every step of the way.
  
  ${"<br>".repeat(
    2
  )}If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you and address any additional information you may require.
  
  Thank you for your cooperation and understanding in this matter. We will be in touch with you soon with further updates.
  
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_RC_guest_declined_payment: `Hello [Host's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to provide you with an update regarding the resolution of the issue related to your request. We understand that you were seeking approval from the guest, but unfortunately, the guest did not approve the request.
  
  We empathize with your situation and understand that this outcome may be disappointing. However, without the guest's approval, we are unable to proceed with charging them for the requested expenses.
  
  We want to assure you that we have made every effort to mediate the situation and reach a fair resolution. Our goal is to ensure that both hosts and guests have a positive experience on our platform. In this particular case, the guest's approval is essential for us to move forward with any financial transactions.
  
  We regret to inform you that we are unable to cover the expenses from your request. We sincerely apologize for any inconvenience this may cause you.
  
  ${"<br>".repeat(
    2
  )}If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you and provide any additional information you may need.
  
  Thank you for your understanding in this matter. We appreciate your cooperation and look forward to assisting you with any future inquiries or requests.
  
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_RC_guest_approves_partial_payment: `Hello [Host's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to provide you with an update regarding the resolution of the issue related to your request. We appreciate your patience and understanding throughout this process.
  
  Unfortunately, we regret to inform you that the guest has only approved a partial payment in relation to your request. We understand that this may not be the outcome you were hoping for, and we sincerely apologize for any inconvenience or frustration it may have caused.
  
  Please be assured that we made every effort to mediate the situation and advocate for a fair resolution. We understand your concerns and have taken them into consideration during the process. However, the final decision regarding the payment lies with the guest, and we are unable to enforce a full payment without their approval.
  
  ${"<br>".repeat(
    2
  )}We want to assure you that we are committed to providing the best possible support and assistance. If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to listen and provide any additional information or guidance you may need.
  
  Thank you for your understanding and cooperation. We appreciate your patience throughout this process, and we will continue to work diligently to address any remaining issues or concerns.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_RC_unhappy_outcome: `Hello [Host's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to express our sincere apologies for the outcome of the situation. We understand that this may not be the outcome you were expecting, and we empathize with any disappointment or frustration it may have caused.
  
  Please know that we genuinely did our best to mediate and find a fair resolution. We value your feedback and understand that you may have opinions or suggestions regarding our policies. We encourage you to share your thoughts and opinions by visiting our help article on providing feedback:${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/1640${"<br>".repeat(2)}
  
  Your feedback is important to us as it helps us improve and enhance our services. We appreciate your willingness to share your perspective with us.
  
  If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you and provide any additional assistance you may require.
  
  Thank you for your understanding, and we apologize once again for any inconvenience caused. We value your feedback and appreciate your cooperation.
  ${"<br>".repeat(2)}
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_RC_asking_for_refund: `Hello [Host's Name],${"<br>".repeat(2)}

  I hope this message finds you well. I wanted to reach out to discuss a matter concerning a reservation with one of our guests. Due to unforeseen circumstances, the guest is requesting a refund beyond the scope of our standard Cancellation Policy.
  
  While our Cancellation Policy typically outlines the refund amount, we understand that there are situations where hosts choose to go above and beyond to ensure exceptional service within our hosting community. Many hosts in similar situations have opted to provide a full refund to the guest as a gesture of goodwill and to maintain a positive experience for all involved.
  
  We kindly request your consideration in providing a refund to the guest in this particular case. Your understanding and support would greatly contribute to fostering a welcoming and supportive environment within our community.${"<br>".repeat(
    2
  )}
  
  If you have any questions or concerns, please don't hesitate to reach out. We appreciate your attention to this matter and value your contribution to our hosting community.
  
  Thank you for your understanding and cooperation.${"<br>".repeat(2)}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_RC_asking_for_refund_2nd_attempt: `Hello [Host's Name],${"<br>".repeat(2)}

  I hope this message finds you well. I wanted to follow up on our previous discussion regarding the guest's refund request for their reservation. We understand that providing a full refund may not be feasible for you at this time. However, we kindly request your consideration in providing a partial refund as a gesture of goodwill.
  
  We acknowledge that hosting can sometimes come with unexpected circumstances, and we greatly appreciate your understanding in navigating this situation. By offering a partial refund, you can still contribute to ensuring a positive experience for the guest while also considering your own hosting commitments.${"<br>".repeat(
    2
  )}
  
  If you have any questions or concerns about the refund amount or need further clarification, please don't hesitate to let us know. We are here to assist you and address any inquiries you may have.
  
  Thank you for your attention to this matter and for being an integral part of our hosting community. Your willingness to find a fair resolution is greatly appreciated.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_RC_HIW: `Hello [Host's Name],${"<br>".repeat(2)}

  I hope this message finds you well. I wanted to take a moment to explain our Resolution Center and how it can assist in resolving any issues or disputes that may arise during a reservation. ${"<br>".repeat(
    2
  )}
  
  The Resolution Center is a platform provided by Airbnb to facilitate communication and negotiation between hosts and guests when there is a disagreement or a need for reimbursement or resolution. It is designed to help parties find a fair and satisfactory resolution independently, with the option to involve Airbnb as a mediator if necessary.${"<br>".repeat(
    2
  )}
  
  You can access the Resolution Center through your Airbnb account. Once there, you will be able to initiate or respond to a resolution request, communicate with the guest, and submit relevant documentation or evidence to support your case. It is important to provide clear and detailed information to ensure a comprehensive understanding of the situation.${"<br>".repeat(
    2
  )}
  
  To familiarize yourself with the process and guidelines, I recommend reviewing the Resolution Center article, which can be found here:${"<br>".repeat(
    2
  )}
    
  https://www.airbnb.com/help/article/767 ${"<br>".repeat(2)}
  
  It provides detailed information on how to navigate the Resolution Center effectively, steps to take for resolution, and the overall process.
  
  Please remember that open and respectful communication is key when using the Resolution Center. By engaging in constructive dialogue, you can often reach a mutually agreeable solution that benefits both you and the guest.${"<br>".repeat(
    2
  )}
  
  If you have any questions or require further assistance with the Resolution Center or any other aspect of your hosting experience, please don't hesitate to reach out to us. We are here to support you and ensure a smooth resolution process.
  
  Thank you for your attention, and we appreciate your commitment to providing excellent hosting experiences on Airbnb.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_asked_guest_to_cancel: `Hello [Host's Name],${"<br>".repeat(2)}

  I hope this message finds you well. We recently received communication from the guest regarding your reservation. According to the guest, they have been asked by you to cancel the reservation.
  
  If this is indeed the case, we must inform you that it goes against our policies and guidelines. Airbnb encourages hosts to honor their confirmed reservations to maintain the trust and reliability of our platform.
  
  If we do not receive a response from you within the specified deadline, we will have no choice but to cancel the reservation on your behalf. Please note that in such circumstances, penalties will be applied as outlined in our penalties policy. You can find more information about these penalties by following this link:${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/990${"<br>".repeat(2)}
  
  We understand that there may be unforeseen circumstances or exceptional situations that can arise. If you believe there is a valid reason for requesting the cancellation, we kindly ask that you provide us with a detailed explanation as soon as possible. We will review your case and take it into consideration before making any final decisions.${"<br>".repeat(
    2
  )}
    
  If you have any questions or need further clarification, please do not hesitate to reach out to us. We are here to assist you.
  
  Thank you for your understanding.
  
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  host_AIRCOVER_HIW: `Hello [Host's Name],${"<br>".repeat(2)}

  I hope this message finds you well. I wanted to provide you with some important information regarding Airbnb's AirCover for Hosts program. You can find detailed information about this program by visiting the following link: ${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/3142${"<br>".repeat(2)}
  
  The page explains the AirCover for Hosts program, which is designed to provide coverage and assistance to hosts in certain situations. It outlines the circumstances in which hosts may be eligible for support, such as property damage caused by guests or liability protection.
  
  It's important to familiarize yourself with this information to understand the coverage and support available to you as a host. The AirCover for Hosts program aims to provide peace of mind and protection for hosts in various situations that may arise during guest stays.${"<br>".repeat(
    2
  )}
  
  If you have any specific questions or need further clarification regarding the AirCover for Hosts program, please don't hesitate to reach out to us. We are here to assist you and provide guidance to ensure a smooth hosting experience.
  
  Thank you for your attention to this matter.${"<br>".repeat(2)}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  ooo: `Hello,${"<br>".repeat(2)}

  I wanted to inform you that my shift is coming to an end, and I will be out of the office until [date]. During this time, if you need any urgent assistance, please feel free to reach out to us directly at [phone number]. We will be available to help you promptly with any pressing matters or emergencies that may arise.${"<br>".repeat(
    2
  )}
  
  Please note that non-urgent inquiries or requests may experience a delay in response, as I will not be available to address them directly until my return on [date].${"<br>".repeat(
    2
  )}
  
  Thank you for your understanding, and I look forward to assisting you further when I am back in the office. Have a great day!${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
};

// --------------------- Guest Macros --------------------- //

const guest = {
  follow_up_message: `Hello [User's Name],${"<br>".repeat(2)}

We hope this message finds you well. We wanted to follow up regarding the case you reported to us recently. Despite our previous communication, we haven't received any response from you regarding the matter.

We understand that circumstances may have changed or that you might have been occupied with other commitments. As a result, we will be closing the case for now. However, please be aware that we are always here to assist you should you wish to revisit the matter or require any further assistance in the future.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  guest_review_dispute_no_violation: `Hello[Guest's Name],
${"<br>".repeat(
  2
)}We hope this message finds you well. We understand your concerns regarding the review you have requested for deletion. We appreciate your feedback and taking the time to bring this matter to our attention.
  
After careful consideration and review of our content policy, we regret to inform you that we are unable to delete the review in question. While we understand your perspective and the impact this review may have, it does not violate our Content Policy, and we must maintain a fair and consistent approach to all guest reviews.
  
We value your feedback and understand the importance of creating a positive experience for all our users. We encourage you to continue engaging in open and constructive dialogue with the host to address any concerns or issues that may have arisen during your stay.${"<br>".repeat(
    2
  )}
  
We appreciate your understanding in this matter. If you have any further questions or need additional assistance, please do not hesitate to reach out to us. We are here to support you and ensure a transparent and fair hosting experience for all.
  
You can find more information about our Policies regarding this matter in these links: ${"<br>".repeat(
    2
  )} 
  
https://www.airbnb.com/help/article/13
https://www.airbnb.com/help/article/2763
https://www.airbnb.com/help/article/546
${"<br>".repeat(2)}
  
You can also opt for responding to your Host, in order present your side of the story and further clarify the situation, if needed.Thank you for being a part of our community.
  
${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
[Your Name]`,
  guest_review_dispute_violation: `Hello [Guest's Name],${"<br>".repeat(2)}

We hope this message finds you well. We would like to inform you that we have reviewed the content of your recent review and have determined that it is in violation of our Content Policy. As a result, we will be removing the review from our platform.
  
At Airbnb, we strive to maintain a respectful and inclusive community where all members feel safe and valued. Our Content Policy outlines guidelines and standards that we expect all users to adhere to when sharing their experiences and feedback.
  
We understand that everyone has their own opinions and experiences, but it is essential to express them in a manner that aligns with our community guidelines. Unfortunately, your review did not meet these criteria, and therefore, we have taken the necessary steps to remove it.${"<br>".repeat(
    2
  )}
  
We value your participation in our community and appreciate your understanding and cooperation in upholding our Content Policy. Should you have any questions or require further clarification, please do not hesitate to reach out to us. We are here to assist you. Also, you can find more information about this matter in this link:
  
${"<br>".repeat(2)}https://www.airbnb.com/help/article/2673${"<br>".repeat(2)}
  
Thank you for your attention to this matter.
  
${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
[Your Name]`,
  guest_review_dispute_pushback: `Hello [Guest's Name],${"<br>".repeat(2)}

Thank you for reaching out to Airbnb regarding your request to delete a review. We understand that you would like the review to be removed, and we appreciate your concerns. 

At Airbnb, we strive to maintain the authenticity and transparency of our review system. Reviews play a crucial role in helping our community make informed decisions. As a result, we have established clear guidelines and policies to ensure fairness and integrity.

Unless a review violates our Content Policy, we are unable to delete it. Our Content Policy prohibits certain types of content, such as hate speech, discrimination, or fraudulent activities. If the review aligns with our guidelines, it will remain visible on the platform.${"<br>".repeat(
    2
  )}

We understand that receiving a review that you disagree with can be disappointing. However, we encourage you to approach the situation constructively. Engaging in open and respectful communication allows you to share your perspective and address any concerns raised by the reviewer.

We appreciate your understanding and cooperation in this matter. If you have any further questions or need assistance with any other aspect of your Airbnb experience, please feel free to contact me.
  
  ${"<br>".repeat(2)}Warm regards,${"<br>".repeat(2)}
  
[Your Name]`,
  guest_cancellations_rebooking: `Hello [Guest's Name],${"<br>".repeat(2)}

  We regret to inform you that your reservation has been cancelled. We understand the inconvenience this may cause and want to assure you that we are here to assist you during this situation.
  
  Rest assured, we have processed a full refund for your reservation, and you can expect to receive it within the next few business days. If you have any questions or concerns regarding the refund, please refer to our support article for more information: ${"<br>".repeat(
    2
  )}https://www.airbnb.com/help/article/1967${"<br>".repeat(2)}
    
  To help you find alternative accommodations, we recommend using our "Contact Host" feature to reach out to a series of hosts who may have listings available. We have provided some alternatives below for you to get started:
  
  ${"<br>".repeat(2)}[Listing Link]${"<br>".repeat(2)}
  [Listing Link]${"<br>".repeat(2)}
  [Listing Link]${"<br>".repeat(2)}
  By reaching out to these hosts, you can inquire about the availability and readiness of their listings for booking. We strongly advise to wait for the host to reply, and then book the listing of your choice. We are also available to assist you further in finding a suitable alternative.
  
  We sincerely apologize for any inconvenience caused by this cancellation, and we appreciate your understanding in this matter. If you have any questions or need further assistance, please don't hesitate to contact us.
  
  ${"<br>".repeat(
    2
  )}Thank you for your understanding, and we look forward to assisting you in finding a new accommodation.
  
  ${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_cancellations_no_rebooking: `Hello [Guest's Name],${"<br>".repeat(2)}
We regret to inform you that your reservation has been canceled. We sincerely apologize for any inconvenience this may have caused. Please be assured that you will receive a full refund for the reservation.If you have any questions or concerns regarding the refund, please refer to our support article for more information: ${"<br>".repeat(
    2
  )}https://www.airbnb.com/help/article/1967${"<br>".repeat(2)}

We understand the importance of your travel plans and the impact of this cancellation. If there is anything else we can do to assist you, please let us know. Our team is here to help and ensure that you have a positive experience.

${"<br>".repeat(
  2
)}Again, we apologize for the inconvenience caused by the cancellation. We appreciate your understanding and cooperation. If you have any further questions or need any assistance, please don't hesitate to reach out to us.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}
[Your Name]`,
  guest_EC_invalid: `Hello [Guest's Name],${"<br>".repeat(2)}

Thank you for reaching out to us regarding your cancellation and your request for a full refund based on unforeseen circumstances. We understand that you are facing a challenging situation, and we empathize with the difficulties you are experiencing.

${"<br>".repeat(
  2
)}After careful assessment, we regret to inform you that your situation does not fall under our Extenuating Circumstances Policy. We sincerely apologize for any disappointment or inconvenience this may cause.

${"<br>".repeat(
  2
)}While we are unable to provide a full refund directly, we are committed to assisting you in finding a resolution. In order to address your concerns and provide more information about our policy, we encourage you to review our Extenuating Circumstances Policy in detail. You can find it in our help article: ${"<br>".repeat(
    2
  )}https://www.airbnb.com/help/article/1320${"<br>".repeat(2)}

Please be assured that we will contact the host on your behalf and mediate the situation. The host is the one who can make a final decision regarding the refund, as they have control over their listing and cancellation policy.

We kindly ask for your patience as we work towards a resolution. We will do our best to facilitate a fair outcome and provide updates to you as soon as possible.

If you have any further questions or need additional assistance, please do not hesitate to reach out to us. We are here to support you throughout this process.

${"<br>".repeat(
  2
)}Once again, we sincerely apologize for the inconvenience you have encountered, and we appreciate your understanding in this matter.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  guest_initiated_alterations: `Hello [Guest's Name],${"<br>".repeat(2)}

Thank you for reaching out to us regarding your desire to alter your reservation. We acknowledge your request and want to assure you that we are here to assist you.

To make changes to your reservation, we offer two options:${"<br>".repeat(2)}

1. If you prefer to handle the alterations yourself, you can follow the steps outlined in our help article${"<br>".repeat(
    2
  )} https://www.airbnb.com/help/article/913${"<br>".repeat(
    2
  )} This article provides detailed instructions on how to modify your reservation directly through our platform.${"<br>".repeat(
    2
  )}

2. If you would like us to handle the changes on your behalf, we kindly request that you provide us with the specific details of the modifications you wish to make. Please send us a written confirmation, including the necessary information, and we will proceed with the alterations accordingly.${"<br>".repeat(
    2
  )}

We understand that flexibility is essential, and we are committed to accommodating your needs to the best of our abilities. If you have any questions or require further assistance throughout the process, please do not hesitate to reach out to us. We are here to support you.

Thank you for choosing Airbnb, and we look forward to assisting you with the necessary changes to your reservation.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  guest_party_prevention: `Hello [Guest's Name],${"<br>".repeat(2)}

We hope this message finds you well. We wanted to inform you that your reservation has been restricted due to a series of patterns that our system has identified. These patterns have triggered the restriction as a preventive measure to avoid events such as parties and maintain a safe and respectful environment for both hosts and guests. We understand that this news may come as a disappointment, and we empathize with any inconvenience this may cause.

Unfortunately, we are unable to remove this restriction at this time. It is in place to ensure the overall safety and comfort of our hosting community. We apologize for any frustration or inconvenience this may cause you.${"<br>".repeat(
    2
  )}

However, please note that you are still able to book private rooms and hotel rooms within our platform. We encourage you to explore these options for your accommodation needs. Our hosts and hotels provide a variety of comfortable and welcoming spaces for you to enjoy during your stay.

${"<br>".repeat(
  2
)}If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to assist you and provide any additional information you may need.

Thank you for your understanding and cooperation.

${"<br>".repeat(2)}Best regards,${"<br>".repeat(2)}

[Your Name]`,
  guest_initiating_RC_with_host: `Hello [Guest's Name],${"<br>".repeat(2)}

We sincerely apologize for the frustration and inconvenience you have experienced regarding your reservation. We understand your disappointment, and we want to assure you that we are here to support you in resolving this matter.

We want to inform you that we will be reaching out to the host on your behalf to mediate and discuss the possibility of a refund. Please understand that the final decision regarding the refund lies with the host, as they have control over the reservation details and financial matters.${"<br>".repeat(
    2
  )}

Our team will make every effort to advocate for a fair resolution and work towards finding a suitable outcome. We appreciate your patience and understanding during this process, and we will keep you informed of any progress or updates. For more information about our refund and resolution process, we recommend reviewing our Resolution Center, which provides a dedicated platform for managing and resolving issues between hosts and guests:${"<br>".repeat(
    2
  )}

https://www.airbnb.com/help/article/767${"<br>".repeat(2)}

You can access the Resolution Center by visiting:${"<br>".repeat(2)}

https://www.airbnb.com/resolutions${"<br>".repeat(2)}

If you have any additional information or details that you believe would be helpful for us in mediating this situation, please do not hesitate to share them with us. Your input is valuable in facilitating effective communication between you and the host.

Thank you for your cooperation and for being a valued member of our community. We are committed to resolving this matter as quickly and fairly as possible.${"<br>".repeat(
    2
  )}

Best regards,${"<br>".repeat(2)}

[Your Name]`,
  guest_RC_host_declined_refund: `Hello [Guest's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to provide you with an update regarding the refund request for your reservation. We regret to inform you that the host has denied the refund.
  
  We understand that this news may be disappointing and frustrating for you, especially when you had anticipated a different outcome. We empathize with your situation, and we apologize for any inconvenience or dissatisfaction this may have caused.
  
  Please know that we did our best to mediate and advocate for a fair resolution on your behalf. However, as the final decision regarding refunds rests with the host, we are unable to enforce a refund without their approval.${"<br>".repeat(
    2
  )}
  
  We understand that this may not be the resolution you were hoping for, and we regret any disappointment this may have caused. If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you and provide any additional information or assistance you may need.
  
  Thank you for your understanding and cooperation throughout this process. We appreciate your patience and will continue to work diligently to assist you with any future inquiries or concerns.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_RC_host_approves_partial_refund: `Hello [Guest's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to provide you with an update regarding the resolution of your refund request. Unfortunately, the host has only approved a partial refund.
  
  We understand that this may not be the outcome you were hoping for, and we sincerely apologize for any inconvenience or frustration it may have caused. We want to assure you that we did our best to advocate for a fair resolution on your behalf.
  
  Please know that we made every effort to mediate the situation and encourage the host to provide a full refund. However, the final decision regarding the refund amount lies with the host, as they have control over the reservation details and financial matters.${"<br>".repeat(
    2
  )}
  
  We regret any disappointment or inconvenience this may have caused you. If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you and provide any additional assistance or guidance you may need.
  
  Thank you for your understanding and cooperation throughout this process. We value your feedback and will continue to work diligently to assist you with any remaining issues or concerns.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_RC_unhappy_outcome: `Hello [Guest's Name],${"<br>".repeat(2)}

  We hope this message finds you well. We wanted to express our sincere apologies for the outcome of the situation. We understand that this may not be the outcome you were expecting, and we empathize with any disappointment or frustration it may have caused.
  
  Please know that we genuinely did our best to mediate and find a fair resolution. We value your feedback and understand that you may have opinions or suggestions regarding our policies. We encourage you to share your thoughts and opinions by visiting our help article on providing feedback:${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/1640${"<br>".repeat(2)}
  
  Your feedback is important to us as it helps us improve and enhance our services. We appreciate your willingness to share your perspective with us.
  
  If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you and provide any additional assistance you may require.
  
  Thank you for your understanding, and we apologize once again for any inconvenience caused. We value your feedback and appreciate your cooperation.
  ${"<br>".repeat(2)}
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_RC_asking_for_payment: `Hello [Guest's Name],${"<br>".repeat(2)}

  I hope this message finds you well. I'm reaching out to you on behalf of your host, [Host's Name]. They have requested an additional payment through our Resolution Center for your reservation.
  
  We understand that there may have been a situation during your stay that could have resulted in additional costs. We kindly request your cooperation in resolving this matter. If you agree with the allegation and are willing to take responsibility, we kindly ask you to make the payment or approve us to process it on your behalf.
  
  To proceed with the resolution process, you have two options:${"<br>".repeat(2)}
  
  1. You can make the payment directly through our secure Resolution Center. Please follow this link to complete the payment:${"<br>".repeat(
    2
  )} 
  
  https://www.airbnb.com/resolutions${"<br>".repeat(2)}
  
  This option allows you to securely process the payment on your own.${"<br>".repeat(2)}
  
  2. If you agree with the situation described and would like us to process the payment on your behalf, please provide us with your confirmation, and we will ensure that the transaction is processed securely and promptly.${"<br>".repeat(
    2
  )}
  
  If you have any questions or need clarification about the situation or the resolution process, please do not hesitate to reach out to us. We are here to guide you and provide any necessary support.${"<br>".repeat(
    2
  )}
  
  Thank you for your attention to this matter. We appreciate your cooperation and look forward to resolving this issue amicably.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_RC_asking_for_payment_2nd_attempt: `Hello [Guest's Name],${"<br>".repeat(2)}

  We understand that you may not agree with the request for a full payment, and we respect your perspective. We acknowledge that finding a middle ground can often lead to a satisfactory resolution for both parties involved.
  
  Considering this, we would like to propose the possibility of a partial payment to address the situation. We believe that reaching a mutually acceptable resolution is important, and we encourage open communication to find a fair outcome that works for both you and your host.
  
  If you are open to discussing a partial payment as a compromise, we kindly request your input and suggest initiating a conversation with your host. This will allow you to engage in a constructive dialogue and explore potential alternatives that align with your respective needs and concerns.
  
  Should you require any assistance or guidance during this process, please do not hesitate to reach out to us. We are here to support you and facilitate communication between you and your host.${"<br>".repeat(
    2
  )}
  
  Thank you for your understanding and cooperation. We appreciate your willingness to find a resolution that benefits all parties involved.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_AIR_COVER_asking_for_docu: `Hello [Guest's Name],${"<br>".repeat(2)}

  Thank you for reaching out to us regarding your situation. In order for us to assess whether your circumstances fall within the coverage of our Aircover Policy, we kindly request that you provide us with documentation or evidence related to your claim.
  
  Documentation plays a crucial role in helping us understand and evaluate the nature and impact of the situation you have encountered. It allows us to make an informed decision and ensure a fair resolution process.
  
  We assure you that all information you provide will be treated with the utmost confidentiality and used solely for the purpose of assessing your situation and providing appropriate assistance.${"<br>".repeat(
    2
  )}
  
  If you have any questions or require guidance on what specific documentation to provide, please do not hesitate to contact us. We are here to support you throughout this process and make it as smooth as possible.
  
  Thank you for your cooperation and understanding. We appreciate your prompt attention to this matter.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_AIR_COVER_invalid_docu: `Hello [Guest's Name],${"<br>".repeat(2)}

  Thank you for providing the documentation regarding your situation. We have carefully reviewed the information you shared; however, we regret to inform you that the documentation provided is either not valid or insufficient to determine if your situation falls within the coverage of our Aircover Policy.${"<br>".repeat(
    2
  )}
  
  We understand that this may be disappointing news, and we empathize with any challenges you may be facing. Our policy requires valid and substantial documentation to ensure fairness and consistency in assessing claims.
  
  If you have any additional information or alternative documentation that you believe could support your claim, we encourage you to provide it to us as soon as possible. This will allow us to reassess your situation and determine if further action can be taken.
  
  We apologize for any inconvenience this may cause, and we appreciate your understanding. Should you have any further questions or concerns, please do not hesitate to reach out to us. We are here to assist you to the best of our abilities.${"<br>".repeat(
    2
  )}
  
  Thank you for your cooperation.${"<br>".repeat(2)}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_AIR_COVER_invalid: `Hello [Guest's Name],${"<br>".repeat(2)}

  Thank you for bringing your question to our attention. We have carefully reviewed your situation in light of our Aircover Policy, specifically the information provided in this article:${"<br>".repeat(
    2
  )}
  
  https://www.airbnb.com/help/article/3218${"<br>".repeat(2)}
  
  After careful consideration, we regret to inform you that your specific circumstances do not fall within the coverage of our Aircover Policy. The policy is designed to address certain unforeseen events or circumstances that may impact your trip, and we understand that it can be disappointing when your situation does not meet the criteria.${"<br>".repeat(
    2
  )}
  
  We encourage you to review the Aircover Policy article thoroughly to understand the scope and limitations of coverage provided. While we sympathize with any difficulties you may be facing, it is essential for us to adhere to the policy guidelines to ensure fairness and consistency for all guests and hosts on our platform.
  
  If you have any further questions or concerns regarding the policy or your specific situation, please do not hesitate to reach out to us. We are here to provide further clarification and support to the best of our abilities.
  
  Thank you for your understanding, and we appreciate your continued trust in Airbnb.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_AIR_COVER_valid: `Hello [Guest's Name],${"<br>".repeat(2)}

  We have reviewed your situation carefully and we are pleased to inform you that your specific circumstances are covered by our Aircover Policy. We understand the importance of providing support during unforeseen events or circumstances that may impact your trip.
  
  Rest assured, we will take immediate action to assist you. We will contact your host right away to discuss your situation and work towards a resolution. Our priority is to ensure that you have a positive and enjoyable experience during your stay.
  
  If you have any additional information or details that you would like us to consider while communicating with the host, please let us know. Your input is valuable in helping us advocate for you effectively.${"<br>".repeat(
    2
  )}
  
  We appreciate your understanding and cooperation throughout this process. Should you have any further questions or concerns, please do not hesitate to reach out to us. We are here to support you every step of the way.
  
  Thank you for choosing Airbnb, and we look forward to resolving this matter in a satisfactory manner.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  
  [Your Name]`,
  guest_RC_HIW: `Hello [Guest's Name],${"<br>".repeat(2)}

  I wanted to provide you with some important information regarding the Resolution Center:${"<br>".repeat(
    2
  )}
  
  The Resolution Center: It is a useful tool that allows you to send or request money for matters related to your Airbnb trip or Airbnb Experience. Whether you need to open a refund or payment request, you can conveniently handle it through the Resolution Center. Please note that you have up to 60 days after your reservation's checkout date to submit a request. Additionally, make sure you have added a payment method before initiating any money transactions.${"<br>".repeat(
    2
  )}
  
  Mediation Assistance: In case you and your guest are unable to reach an agreement, you have the option to ask Airbnb for mediation support. Simply follow the necessary steps, and a dedicated team member will review the information provided by both parties, ask any relevant questions if needed, and ultimately make a final decision. Remember that any issues must be reported to Airbnb within 72 hours of discovery to be eligible under our Rebooking and Refund Policy.${"<br>".repeat(
    2
  )}
  
  If you require further assistance or have any additional questions, please don't hesitate to reach out. We're here to support you every step of the way.${"<br>".repeat(
    2
  )}
  
  Best regards,${"<br>".repeat(2)}
  [Your Name]`,
  guest_AIRCOVER_HIW: `Hello [Guest's Name],${"<br>".repeat(2)}

I hope you're doing well. I wanted to share some information with you about Airbnb's AirCover program. You can find detailed information on this program by visiting the following link: ${"<br>".repeat(
    2
  )}

https://www.airbnb.com/help/article/3218${"<br>".repeat(2)}

AirCover is designed to protect guests like you and provide coverage in specific situations. It outlines the circumstances in which you may be eligible for coverage and assistance, such as if the listing you booked was not accurately described, if it was unclean upon arrival, or if the host cancels your reservation.

It's essential to familiarize yourself with this program as it helps you understand your rights and the options available to you if any issues arise during your stay. AirCover aims to ensure that you have a safe and enjoyable experience when booking through Airbnb.${"<br>".repeat(
    2
  )}

If you have any questions or need further clarification regarding AirCover, please feel free to reach out to me. I'm here to assist you and provide guidance to ensure a smooth experience during your stay.

Thank you for your attention, and I'm here to help if you need anything.${"<br>".repeat(2)}

Best regards,${"<br>".repeat(2)}

[Your Name]`,
  ooo: `Hello,${"<br>".repeat(2)}

I wanted to inform you that my shift is coming to an end, and I will be out of the office until [date]. During this time, if you need any urgent assistance, please feel free to reach out to us directly at [phone number]. We will be available to help you promptly with any pressing matters or emergencies that may arise.${"<br>".repeat(
    2
  )}

Please note that non-urgent inquiries or requests may experience a delay in response, as I will not be available to address them directly until my return on [date].${"<br>".repeat(
    2
  )}

Thank you for your understanding, and I look forward to assisting you further when I am back in the office. Have a great day!${"<br>".repeat(
    2
  )}

Best regards,${"<br>".repeat(2)}

[Your Name]`,
};

console.log(
  `We currently have ${Object.keys(guest).length} Guest Macros, ${
    Object.keys(host).length
  } Host Macros, ${Object.keys(guest).length + Object.keys(host).length} in total.`
);

let keyResults = []; // Array to store key results

// --------------------- Result Logic --------------------- //

function displayKeyResults() {
  const resultsContainer = document.getElementById("results");
  resultsContainer.textContent = ""; // Clear previous results

  if (keyResults.length === 0) {
    const noResultsElement = document.createElement("div");
    noResultsElement.textContent = "Sorry, no 🌮 for you :( Try again with another keyword.";
    resultsContainer.appendChild(noResultsElement);
  } else {
    keyResults.forEach(function (result) {
      const keyElement = document.createElement("div");
      keyElement.textContent = result;

      keyElement.addEventListener("click", function () {
        const valueElement = document.createElement("div");
        let value = host[result] || guest[result] || "";
        valueElement.innerHTML = value;
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(valueElement);

        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy";
        copyButton.addEventListener("click", function () {
          copyText(value);
        });

        resultsContainer.appendChild(copyButton);

        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.addEventListener("click", displayKeyResults);
        resultsContainer.appendChild(backButton);
      });

      resultsContainer.appendChild(keyElement);
    });
  }
}

// --------------------- copy Text Logic --------------------- //

function copyText(text) {
  // Remove HTML tags from the text
  const strippedText = text.replace(/<[^>]+>/g, "");

  const textarea = document.createElement("textarea");
  textarea.value = strippedText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// --------------------- Host Search Logic --------------------- //

function searchHost() {
  const searchInput = document.getElementById("hostSearchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  keyResults = []; // Clear previous key results

  if (searchTerm === "all") {
    keyResults = Object.keys(host);
  } else if (searchTerm.split(" ").length > 1) {
    keyResults.push(`In the name of all 🌮, use one keyword!`);
  } else {
    if (searchTerm === "marco") {
      keyResults.push(`Polo!`);
    } else if (searchTerm === "andreea") {
      keyResults.push(`Petrescu!`);
    } else if (searchTerm === "alexandra") {
      keyResults.push(`Ghidu!`);
    } else if (searchTerm === "radu") {
      keyResults.push(`Boss!`);
    } else if (searchTerm === "lavinia") {
      keyResults.push(`Yep!`);
    } else if (searchTerm === "beatrice") {
      keyResults.push(`Da-te-n Doba!`);
    } else if (searchTerm === "telus") {
      keyResults.push(`International!`);
    } else if (searchTerm === "joke") {
      keyResults.push(`Let's TAC ALL about your Macros!`);
    } else if (searchTerm === "claudia") {
      coolHeading.innerHTML = "Kids... Don't dye your hair.";
      coolHeading.style.color = `blue`;
      keyResults.push(`Mini Boss!`);
    } else if (searchTerm === "stefan") {
      keyResults.push(`Facar Boi!`);
    } else if (searchTerm === "macro") {
      keyResults.push(`Taco!`);
    } else if (searchTerm === "taco") {
      keyResults.push(`❤️`);
    } else if (searchTerm === "teo") {
      keyResults.push(`🌹`);
    }
  }

  for (const key in host) {
    if (key.toLowerCase().includes(searchTerm)) {
      keyResults.push(key);
    }
  }

  displayKeyResults();
  console.log(`🌮`);
}

// --------------------- Guest Search Logic --------------------- //

function searchGuest() {
  const searchInput = document.getElementById("guestSearchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  keyResults = []; // Clear previous key results

  if (searchTerm === "all") {
    keyResults = Object.keys(guest);
  } else if (searchTerm.split(" ").length > 1) {
    keyResults.push(`In the name of all 🌮, use one keyword!`);
  } else {
    if (searchTerm === "marco") {
      keyResults.push(`Polo!`);
    } else if (searchTerm === "andreea") {
      keyResults.push(`Petrescu!`);
    } else if (searchTerm === "alexandra") {
      keyResults.push(`Ghidu!`);
    } else if (searchTerm === "radu") {
      keyResults.push(`Boss!`);
    } else if (searchTerm === "lavinia") {
      keyResults.push(`Yep!`);
    } else if (searchTerm === "beatrice") {
      keyResults.push(`Da-te-n Doba!`);
    } else if (searchTerm === "telus") {
      keyResults.push(`International!`);
    } else if (searchTerm === "joke") {
      keyResults.push(`Let's TAC ALL about your Macros!`);
    } else if (searchTerm === "claudia") {
      coolHeading.innerHTML = "Kids... Don't dye your hair.";
      coolHeading.style.color = `blue`;
      keyResults.push(`Mini Boss!`);
    } else if (searchTerm === "stefan") {
      keyResults.push(`Facar Boi!`);
    } else if (searchTerm === "macro") {
      keyResults.push(`Taco!`);
    } else if (searchTerm === "taco") {
      keyResults.push(`❤️`);
    } else if (searchTerm === "teo") {
      keyResults.push(`🌹`);
    }
  }

  for (const key in guest) {
    if (key.toLowerCase().includes(searchTerm)) {
      keyResults.push(key);
    }
  }

  displayKeyResults();
  console.log(`🌮`);
}

// --------------------- Reload Page Logic --------------------- //

function reload() {
  location.reload();
}

// ---------------------Dark Mode Logic --------------------- //

function dark() {
  let stylesheet = document.getElementById("stylesheet");
  var toggleButton = document.getElementById("dark");

  if (stylesheet.getAttribute("href") === "main.css") {
    stylesheet.setAttribute("href", "dark.css");
    toggleButton.innerHTML = "☀️";
  } else {
    stylesheet.setAttribute("href", "main.css");
    toggleButton.innerHTML = "🌙";
  }
}

// --------------------- End --------------------- //
