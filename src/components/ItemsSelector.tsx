import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

export default ({ items, onClickItem }: { items: Record<string, boolean>, onClickItem?: (item: string) => void }) => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4}>
            <Stack alignItems='center'>
                <Typography variant='subtitle1'>Select the skills you want to focus on:</Typography>
                <Stack spacing={{ xs: 1 }} direction="row" useFlexGap flexWrap="wrap" mt={2}>
                {Object.keys(items).map((item, index) => (
                    <Chip 
                        key={index} 
                        label={item}
                        color='primary'
                        variant={items[item] == true ? undefined : 'outlined'}
                        onClick={() => onClickItem?.(item)}
                    />
                ))
                }
                </Stack>    
            </Stack>
        </Box>
    )
}