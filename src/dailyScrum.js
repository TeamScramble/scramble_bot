const axios = require("axios");
require('dotenv').config();


exports.handler = async (event) => {

    try {
        const result = await axios.post(process.env.DAILYSCRUM_URL, {
            "content": "안뇽 :wave: 데일리 스크럼을 해주세요! \n :white_check_mark: 체크인: \n :white_check_mark: 해야할 일: \n :white_check_mark: 협업할 일: \n :white_check_mark: 논의할 일: "
        })
        console.info("디스코드 웹훅 전송 성공!")
    }
    catch(err){
        console.err("웹훅 실패", err)
    }

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('daily scrum message from Lambda!'),
    };
    
    return response;
};
