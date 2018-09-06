import { NgModule } from '@angular/core';

import { DevopsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DevopsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DevopsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DevopsSharedCommonModule {}
