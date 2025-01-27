import React from 'react';
import {Grid} from "@material-ui/core";
import {
    Budget, LatestOrders, LatestProducts,
    LatestSales,
    TasksProgress,
    TotalProfit,
    TotalUsers,
    UsersByDevice
} from "../../../../views/Dashboard/components";

export default () => {
    return <div >
        <Grid
            container
            spacing={4}
        >
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <Budget />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TotalUsers />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TasksProgress />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TotalProfit />
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
            >
                <LatestSales />
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
                <UsersByDevice />
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
                <LatestProducts />
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
            >
                <LatestOrders />
            </Grid>
        </Grid>
    </div>
}

