import { Box, BoxContent, Card } from './TampletesStyle';



export const DataItems = ({ DataItems }) => {
    return (
        <>
            <Card>
                {
                    DataItems.map(({ id, image, title, details }) => {

                        return (
                            <Box key={id}
                            // style={{ backgroundImage: `url(${image})` }}
                            >
                                <div >
                                    <img src={image} alt="" />
                                </div>
                                <BoxContent>
                                    <h2> {title} </h2>
                                    <p> {details} </p>
                                </BoxContent>
                            </Box>
                        );
                    })
                }
            </Card>
        </>
    );
};
